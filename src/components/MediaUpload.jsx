import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { 
  Upload, 
  Image, 
  Video, 
  X, 
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Crop,
  Filter,
  Music
} from 'lucide-react';

const MediaUpload = ({ onMediaSelect, maxFiles = 5, acceptedTypes = ['image/*', 'video/*'] }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => {
      const isValidType = acceptedTypes.some(type => {
        if (type.includes('*')) {
          return file.type.startsWith(type.replace('*', ''));
        }
        return file.type === type;
      });
      const isValidSize = file.size <= 100 * 1024 * 1024; // 100MB limit
      return isValidType && isValidSize;
    });

    if (selectedFiles.length + validFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files`);
      return;
    }

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('image/') ? 'image' : 'video',
      name: file.name,
      size: file.size
    }));

    setSelectedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setSelectedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
  };

  const simulateUpload = async () => {
    setIsUploading(true);
    
    for (const file of selectedFiles) {
      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        setUploadProgress(prev => ({ ...prev, [file.id]: progress }));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    setIsUploading(false);
    if (onMediaSelect) {
      onMediaSelect(selectedFiles);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card className="bg-charcoal border-gold/20 border-dashed">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <div className="p-3 bg-gold/20 rounded-full">
                <Upload className="w-8 h-8 text-gold" />
              </div>
              <div className="p-3 bg-pan-green/20 rounded-full">
                <Image className="w-8 h-8 text-pan-green" />
              </div>
              <div className="p-3 bg-pan-red/20 rounded-full">
                <Video className="w-8 h-8 text-pan-red" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              Share Your Story Through Media
            </h3>
            <p className="text-gray-400 mb-6">
              Upload photos and videos to share your experiences with the diaspora community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gold hover:bg-warm-gold text-black"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black"
              >
                <Video className="w-4 h-4 mr-2" />
                Record Video
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Supported formats: JPG, PNG, GIF, MP4, MOV • Max size: 100MB • Up to {maxFiles} files
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(',')}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Selected Files Preview */}
      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Selected Media ({selectedFiles.length}/{maxFiles})</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedFiles.map((file) => (
              <Card key={file.id} className="bg-deep-black border-gold/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    {/* Media Preview */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-charcoal flex-shrink-0">
                      {file.type === 'image' ? (
                        <img
                          src={file.preview}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-pan-red" />
                        </div>
                      )}
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFile(file.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-pan-red rounded-full flex items-center justify-center hover:bg-pan-red/80"
                      >
                        <X className="w-3 h-3 text-white" />
                      </button>
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{file.name}</p>
                      <p className="text-gray-400 text-sm">{formatFileSize(file.size)}</p>
                      
                      {/* Upload Progress */}
                      {uploadProgress[file.id] !== undefined && (
                        <div className="mt-2">
                          <Progress 
                            value={uploadProgress[file.id]} 
                            className="h-2"
                          />
                          <p className="text-xs text-gray-400 mt-1">
                            {uploadProgress[file.id]}% uploaded
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Edit Options */}
                    <div className="flex flex-col space-y-2">
                      {file.type === 'image' && (
                        <>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Crop className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Filter className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      {file.type === 'video' && (
                        <>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Music className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Button */}
          <div className="flex justify-end">
            <Button
              onClick={simulateUpload}
              disabled={isUploading}
              className="bg-gold hover:bg-warm-gold text-black"
            >
              {isUploading ? 'Uploading...' : 'Upload Media'}
            </Button>
          </div>
        </div>
      )}

      {/* Media Guidelines */}
      <Card className="bg-charcoal border-gold/20">
        <CardContent className="p-4">
          <h4 className="text-white font-semibold mb-3">Community Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>• Share authentic content that represents your culture and experiences</p>
            <p>• Respect copyright and only upload content you own or have permission to use</p>
            <p>• Keep content appropriate for all ages in the diaspora community</p>
            <p>• Add captions or descriptions to make your content accessible</p>
            <p>• Use relevant hashtags to help others discover your content</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaUpload;


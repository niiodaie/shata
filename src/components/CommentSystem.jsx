import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Heart, 
  MessageCircle, 
  MoreHorizontal, 
  Reply,
  Flag,
  Trash2,
  Edit3,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const CommentSystem = ({ postId, comments: initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [expandedComments, setExpandedComments] = useState(new Set());
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, popular

  // Sample comments data
  const sampleComments = [
    {
      id: 1,
      user: {
        name: "Kwame Asante",
        username: "@kwame_london",
        avatar: "/api/placeholder/32/32",
        diasporaTag: "🇬🇭 x 🇬🇧",
        verified: false
      },
      text: "This is so beautifully written! The way you describe the connection between home and identity really resonates with me as someone living in the diaspora.",
      timestamp: "2 hours ago",
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 101,
          user: {
            name: "Amara Okafor",
            username: "@amara_lagos",
            avatar: "/api/placeholder/32/32",
            diasporaTag: "🇳🇬 x 🇺🇸",
            verified: true
          },
          text: "Thank you so much! It means a lot to hear that from someone who understands the journey. ❤️",
          timestamp: "1 hour ago",
          likes: 5,
          isLiked: true,
          replyingTo: "Kwame Asante"
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "Zara Baptiste",
        username: "@zara_kingston",
        avatar: "/api/placeholder/32/32",
        diasporaTag: "🇯🇲 x 🇨🇦",
        verified: false
      },
      text: "I felt this in my soul. Growing up Caribbean in Canada, I often struggled with questions of belonging. Your words remind me that our stories matter, no matter where we are in the world. 🌍✨",
      timestamp: "3 hours ago",
      likes: 8,
      isLiked: true,
      replies: []
    },
    {
      id: 3,
      user: {
        name: "David Mensah",
        username: "@david_accra",
        avatar: "/api/placeholder/32/32",
        diasporaTag: "🇬🇭 Native",
        verified: false
      },
      text: "As someone still in Ghana, I love reading these perspectives from the diaspora. It helps me understand the experiences of my cousins abroad. We are all connected! 🇬🇭❤️",
      timestamp: "4 hours ago",
      likes: 15,
      isLiked: false,
      replies: [
        {
          id: 301,
          user: {
            name: "Marcus Johnson",
            username: "@marcus_atl",
            avatar: "/api/placeholder/32/32",
            diasporaTag: "🇺🇸 x 🇬🇭",
            verified: false
          },
          text: "This is exactly why platforms like Shata.net are so important. Bridging the gap between home and diaspora! 🌉",
          timestamp: "3 hours ago",
          likes: 3,
          isLiked: false,
          replyingTo: "David Mensah"
        }
      ]
    }
  ];

  const [allComments, setAllComments] = useState(sampleComments);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: {
          name: "You",
          username: "@your_username",
          avatar: "/api/placeholder/32/32",
          diasporaTag: "🇺🇸 x 🇳🇬",
          verified: false
        },
        text: newComment,
        timestamp: "Just now",
        likes: 0,
        isLiked: false,
        replies: []
      };
      setAllComments([comment, ...allComments]);
      setNewComment('');
    }
  };

  const handleSubmitReply = (e, commentId) => {
    e.preventDefault();
    if (replyText.trim()) {
      const updatedComments = allComments.map(comment => {
        if (comment.id === commentId) {
          const reply = {
            id: Date.now(),
            user: {
              name: "You",
              username: "@your_username",
              avatar: "/api/placeholder/32/32",
              diasporaTag: "🇺🇸 x 🇳🇬",
              verified: false
            },
            text: replyText,
            timestamp: "Just now",
            likes: 0,
            isLiked: false,
            replyingTo: comment.user.name
          };
          return {
            ...comment,
            replies: [...comment.replies, reply]
          };
        }
        return comment;
      });
      setAllComments(updatedComments);
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const handleLikeComment = (commentId, isReply = false, parentId = null) => {
    if (isReply) {
      const updatedComments = allComments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  isLiked: !reply.isLiked,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
                };
              }
              return reply;
            })
          };
        }
        return comment;
      });
      setAllComments(updatedComments);
    } else {
      const updatedComments = allComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          };
        }
        return comment;
      });
      setAllComments(updatedComments);
    }
  };

  const toggleReplies = (commentId) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  const sortedComments = [...allComments].sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.timestamp) - new Date(b.timestamp);
      case 'popular':
        return b.likes - a.likes;
      default: // newest
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  return (
    <div className="space-y-6">
      {/* Comment Form */}
      <div className="bg-charcoal rounded-lg p-4 border border-gold/20">
        <form onSubmit={handleSubmitComment}>
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10 border border-gold/30">
              <AvatarImage src="/api/placeholder/40/40" alt="Your avatar" />
              <AvatarFallback className="bg-pan-green text-white">YU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share your thoughts with the community..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-deep-black border-gold/30 text-white placeholder-gray-400 resize-none focus:border-gold"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-400">
                  Be respectful and constructive in your comments
                </p>
                <Button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="bg-gold hover:bg-warm-gold text-black disabled:opacity-50"
                >
                  Comment
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Comments Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {allComments.length} Comments
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-charcoal border border-gold/30 text-white text-sm rounded px-2 py-1 focus:border-gold"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <div key={comment.id} className="bg-charcoal rounded-lg p-4 border border-gold/20">
            {/* Comment Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8 border border-gold/30">
                  <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  <AvatarFallback className="bg-pan-green text-white text-xs">
                    {comment.user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-white text-sm">{comment.user.name}</span>
                    <span className="text-gold text-xs">{comment.user.diasporaTag}</span>
                    {comment.user.verified && (
                      <div className="w-3 h-3 bg-gold rounded-full" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{comment.user.username}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{comment.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Comment Text */}
            <p className="text-gray-300 mb-3 leading-relaxed">{comment.text}</p>

            {/* Comment Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLikeComment(comment.id)}
                  className={`flex items-center space-x-1 ${
                    comment.isLiked ? 'text-pan-red' : 'text-gray-400 hover:text-pan-red'
                  } hover:bg-pan-red/10`}
                >
                  <Heart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm">{comment.likes}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  className="flex items-center space-x-1 text-gray-400 hover:text-gold hover:bg-gold/10"
                >
                  <Reply className="w-4 h-4" />
                  <span className="text-sm">Reply</span>
                </Button>

                {comment.replies.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleReplies(comment.id)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-white"
                  >
                    {expandedComments.has(comment.id) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    <span className="text-sm">{comment.replies.length} replies</span>
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400">
                  <Flag className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4 ml-8">
                <div className="flex space-x-3">
                  <Avatar className="w-8 h-8 border border-gold/30">
                    <AvatarImage src="/api/placeholder/32/32" alt="Your avatar" />
                    <AvatarFallback className="bg-pan-green text-white text-xs">YU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder={`Reply to ${comment.user.name}...`}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="bg-deep-black border-gold/30 text-white placeholder-gray-400 resize-none focus:border-gold"
                      rows={2}
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyingTo(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={!replyText.trim()}
                        size="sm"
                        className="bg-gold hover:bg-warm-gold text-black disabled:opacity-50"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Replies */}
            {expandedComments.has(comment.id) && comment.replies.length > 0 && (
              <div className="mt-4 ml-8 space-y-3">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-deep-black rounded-lg p-3 border border-gold/10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-6 h-6 border border-gold/30">
                          <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                          <AvatarFallback className="bg-pan-green text-white text-xs">
                            {reply.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-white text-sm">{reply.user.name}</span>
                            <span className="text-gold text-xs">{reply.user.diasporaTag}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span>{reply.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="text-gold">@{reply.replyingTo}</span> {reply.text}
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeComment(reply.id, true, comment.id)}
                        className={`flex items-center space-x-1 ${
                          reply.isLiked ? 'text-pan-red' : 'text-gray-400 hover:text-pan-red'
                        } hover:bg-pan-red/10`}
                      >
                        <Heart className={`w-3 h-3 ${reply.isLiked ? 'fill-current' : ''}`} />
                        <span className="text-xs">{reply.likes}</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSystem;


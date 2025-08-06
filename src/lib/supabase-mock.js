// Mock Supabase client for demo purposes
// This simulates the Supabase API without requiring real credentials

const mockUser = {
  id: 'demo-user-123',
  email: 'demo@shata.com',
  user_metadata: {
    first_name: 'Demo',
    last_name: 'User',
    full_name: 'Demo User',
    role: 'user'
  }
}

let currentUser = null
let currentSession = null
let authListeners = []

// Mock auth functions
export const auth = {
  // Sign up with email and password
  signUp: async (email, password, userData = {}) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = {
      ...mockUser,
      email,
      user_metadata: {
        ...mockUser.user_metadata,
        ...userData
      }
    }
    
    const session = {
      user,
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token'
    }
    
    return { 
      data: { user, session }, 
      error: null 
    }
  },

  // Sign in with email and password
  signIn: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = { ...mockUser, email }
    const session = {
      user,
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token'
    }
    
    currentUser = user
    currentSession = session
    
    // Notify listeners
    authListeners.forEach(callback => {
      callback('SIGNED_IN', session)
    })
    
    return { 
      data: { user, session }, 
      error: null 
    }
  },

  // Sign in with magic link
  signInWithMagicLink: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { 
      data: { user: null, session: null }, 
      error: null 
    }
  },

  // Sign in with phone OTP
  signInWithPhone: async (phone) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { 
      data: { user: null, session: null }, 
      error: null 
    }
  },

  // Verify OTP
  verifyOtp: async (phone, token) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = { ...mockUser, phone }
    const session = {
      user,
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token'
    }
    
    currentUser = user
    currentSession = session
    
    // Notify listeners
    authListeners.forEach(callback => {
      callback('SIGNED_IN', session)
    })
    
    return { 
      data: { user, session }, 
      error: null 
    }
  },

  // Sign out
  signOut: async () => {
    currentUser = null
    currentSession = null
    
    // Notify listeners
    authListeners.forEach(callback => {
      callback('SIGNED_OUT', null)
    })
    
    return { error: null }
  },

  // Get current user
  getCurrentUser: async () => {
    return { 
      data: { user: currentUser }, 
      error: null 
    }
  },

  // Get current session
  getSession: async () => {
    return { 
      data: { session: currentSession }, 
      error: null 
    }
  },

  // Listen to auth changes
  onAuthStateChange: (callback) => {
    authListeners.push(callback)
    
    // Return unsubscribe function
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            const index = authListeners.indexOf(callback)
            if (index > -1) {
              authListeners.splice(index, 1)
            }
          }
        }
      }
    }
  }
}

// Mock database functions
export const db = {
  // Get user profile
  getUserProfile: async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { 
      data: {
        id: userId,
        first_name: 'Demo',
        last_name: 'User',
        avatar_url: null,
        bio: 'Welcome to Shata!'
      }, 
      error: null 
    }
  },

  // Update user profile
  updateUserProfile: async (userId, updates) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { 
      data: { id: userId, ...updates }, 
      error: null 
    }
  },

  // Create user profile
  createUserProfile: async (profile) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return { 
      data: { id: 'new-profile-id', ...profile }, 
      error: null 
    }
  }
}

// Mock Supabase client
export const supabase = {
  auth,
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => db.getUserProfile('demo-user-123')
      })
    }),
    update: () => ({
      eq: () => ({
        select: () => db.updateUserProfile('demo-user-123', {})
      })
    }),
    insert: () => ({
      select: () => db.createUserProfile({})
    })
  })
}


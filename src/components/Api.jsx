import React from 'react'
import { useState, useEffect } from 'react'
import { ShoppingCart, Star, Heart, Eye, Filter, Search } from 'lucide-react'
import axios from 'axios'

export default function EnhancedProductStore() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState(new Set())
  const [cart, setCart] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Fetch products using axios - Method 1: Async/Await
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        console.log('Fetched products:', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
        setError('Failed to load products. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Alternative Method 2: Using .then/.catch
  /*
  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        console.log('Fetched products:', response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setError('Failed to load products. Please try again.')
        setLoading(false)
      })
  }, [])
  */

  // Filter logic
  const categories = ['all', ...new Set(products.map(p => p.category))]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Toggle functions
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  const toggleCart = (id) => {
    setCart(prev => {
      const newCart = new Set(prev)
      if (newCart.has(id)) {
        newCart.delete(id)
      } else {
        newCart.add(id)
      }
      return newCart
    })
  }

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading amazing products...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              StyleStore
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors cursor-pointer" />
                {favorites.size > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.size}
                  </span>
                )}
              </div>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer" />
                {cart.size > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.size}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 bg-white/80 backdrop-blur-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        favorites.has(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-md text-gray-600 hover:text-indigo-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(product.rating.rate)}
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.rating.count})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => toggleCart(product.id)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        cart.has(product.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-lg'
                      }`}
                    >
                      {cart.has(product.id) ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-xl max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h2>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* 
INSTALLATION INSTRUCTIONS:

1. First, install the required dependencies:
   npm install axios lucide-react
   
2. If using Tailwind CSS, make sure it's configured properly in your project.

3. Copy this component into your React project.

4. Import and use it in your App.js:
   import EnhancedProductStore from './EnhancedProductStore'
   
   function App() {
     return (
       <div className="App">
         <EnhancedProductStore />
       </div>
     )
   }

AXIOS USAGE EXAMPLES:

Method 1: Async/Await (Recommended)
- Clean and easy to read
- Better error handling
- Modern JavaScript approach

Method 2: Promise Chain (.then/.catch)
- Traditional approach
- Good for simple cases
- More familiar to some developers

Both methods are included in the code above!
*/
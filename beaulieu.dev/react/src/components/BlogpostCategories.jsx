import React, { useState } from 'react'
import BlogpostTile from './BlogpostTile'

const BlogpostCategories = ({ blogposts }) => {
  const [expandedCategory, setExpandedCategory] = useState(null)

  // set state for all categories present in blogposts 
  const categories = [...new Set(blogposts.map(blogpost => blogpost.category))]

  // handle the click for the category 
  const handleCategoryClick = (category) => {
    setExpandedCategory(category === expandedCategory ? null : category);
  }

  // styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  }

  const categoryContainerStyle = {
    width: '100%',
    maxWidth: '800px',
  }

  const categoryTitleStyle = {
    cursor: 'pointer',
    padding: '12px 24px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  }

  const activeCategoryTitleStyle = {
    ...categoryTitleStyle,
    backgroundColor: '#e0e0e0',
  }

  const blogpostDropdownStyle = (isOpen) => ({
    maxHeight: isOpen ? '1000px' : '0',
    overflow: 'hidden',
    transition: 'max-height 1s ease',
    width: '100%',
  })

  const blogpostTileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
  }

  return (
    <div style={containerStyle}>
        {categories.map(category => (
        <div key={category} style={categoryContainerStyle}>
            <div
                style={expandedCategory === category ? activeCategoryTitleStyle : categoryTitleStyle}
                onClick={() => handleCategoryClick(category)}
            >
            {category}
            </div>
            <div style={blogpostDropdownStyle(expandedCategory === category)}>
                <div style={blogpostTileContainerStyle}>
                {blogposts
                    .filter(blogpost => blogpost.category === category)
                    .map(blogpost => (
                    <BlogpostTile key={blogpost.id} blogpost={blogpost} />
                ))}
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default BlogpostCategories
'use client'

export default function ImageDiagnostic() {
  const testUrls = [
    '/hills-optimized.jpg',
    '/ntale-optimized.jpg', 
    '/project1.jpg',
    '/project2.jpg',
    '/project3.jpg',
    '/project4.jpg',
  ]

  const handleImageLoad = (url: string) => {
    console.log(`✅ Image loaded: ${url}`)
  }

  const handleImageError = (url: string) => {
    console.log(`❌ Image failed: ${url}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Image Loading Diagnostic</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Direct Image Access Test</h2>
        <div className="grid gap-4">
          {testUrls.map((url) => (
            <div key={url} className="border rounded p-4">
              <p className="mb-2 font-mono text-sm">{url}</p>
              <div className="flex gap-4">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Open Direct
                </a>
                <img 
                  src={url} 
                  alt="Test" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  onLoad={() => handleImageLoad(url)}
                  onError={() => handleImageError(url)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">File System Check</h2>
        <p className="text-sm text-gray-600">
          Check the browser console for image load results. 
          Also test the direct URLs above.
        </p>
      </div>
    </div>
  )
}

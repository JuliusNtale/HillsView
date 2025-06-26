'use client'

import Image from 'next/image'

export default function TestImages() {
  const images = [
    { src: '/hills-optimized.jpg', alt: 'Hills Image', title: 'Hills Background (Optimized)' },
    { src: '/ntale-optimized.jpg', alt: 'Ntale Portrait', title: 'About Image (Optimized)' },
    { src: '/project1.jpg', alt: 'Project 1', title: 'Portfolio Project 1' },
    { src: '/project2.jpg', alt: 'Project 2', title: 'Portfolio Project 2' },
    { src: '/project3.jpg', alt: 'Project 3', title: 'Portfolio Project 3' },
    { src: '/project4.jpg', alt: 'Project 4', title: 'Portfolio Project 4' },
    { src: '/logo.png', alt: 'Logo', title: 'Main Logo' },
    { src: '/LOGO Horizontal@3x.png', alt: 'Horizontal Logo', title: 'Horizontal Logo' },
    { src: '/Portraite/Julius-1-optimized.jpg', alt: 'Julius Portrait', title: 'Julius Portrait (Optimized)' },
    { src: '/Portraite/IMGL9543-optimized.jpg', alt: 'Portrait 2', title: 'Portrait Sample (Optimized)' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
            <p className="text-sm text-gray-600 mb-4">Path: {image.src}</p>
            <div className="relative w-full h-48 bg-gray-100 rounded">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded"
                onError={() => console.error(`Failed to load image: ${image.src}`)}
                onLoad={() => console.log(`Successfully loaded: ${image.src}`)}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Direct Image URLs</h2>
        <div className="space-y-2">
          {images.map((image, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="font-mono text-sm">{image.src}</span>
              <a 
                href={image.src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Open Direct
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

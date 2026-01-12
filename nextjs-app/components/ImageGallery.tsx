import Image from 'next/image';

interface ImageInfo {
  originalUrl: string;
  alt: string;
  localPath: string;
  type: 'img' | 'srcset' | 'background';
}

interface ImageGalleryProps {
  images: ImageInfo[];
  slug: string;
}

export default function ImageGallery({ images, slug }: ImageGalleryProps) {
  // Filter to only show primary images (not background images)
  const displayImages = images.filter(img => img.type === 'img' || img.type === 'srcset');
  
  if (displayImages.length === 0) return null;
  
  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {displayImages.map((img, index) => {
          const filename = img.localPath.split('/').pop() || '';
          const publicPath = `/${slug}/${filename}`;
          
          return (
            <div key={index} className="gallery-item">
              <Image
                src={publicPath}
                alt={img.alt || `Image ${index + 1}`}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OptimizedImage({ src, alt, className }) {
  // 이미 .webp인 경우 중복 처리 방지
  const webpSrc = src.endsWith('.webp') ? src : src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  
  return (
    <picture className={className}>
      <source srcSet={`../assets/images/${webpSrc}`} type="image/webp" />
      <img 
        src={`../assets/images/${src}`} 
        alt={alt} 
        // 로고는 잘리면 안 되므로 object-contain이 안전할 수 있습니다.
        className="w-full h-full object-contain" 
        loading="lazy" 
      />
    </picture>
  );
}

import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';
import FeaturesImage from '../resources/img/seo/features.png';
import CSSGlobalLocalImage from '../resources/img/seo/css-global-local.png';
import SkeletonImage from '../resources/img/seo/skeleton-loading.png';
import ImageOptimizationImage from '../resources/img/seo/image-optimization.png';

export default [
  {
    path: '/',
    exact: true,
    component: import('../components/home'),
    seo: {
      title: 'Home | AOC Demo',
      description: 'Feature set offered by ReactPWA with pluggable @pawjs plugins. ReactPWA is highly customizable and once can achieve anything as it is extendable',
      image: FeaturesImage,
    },
  },
  {
    path: '/about-us',
    exact: true,
    component: import('../components/about-us'),
    seo: {
      title: 'About Us',
      description: 'About Us',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/create-case',
    exact: true,
    component: import('../components/create-case'),
    seo: {
      title: 'Create Case',
      description: 'Create Case',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/case-history',
    exact: true,
    component: import('../components/case-history'),
    seo: {
      title: 'Case history',
      description: '?',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/typescript-counter',
    exact: true,
    component: import('../components/typescript-counter'),
    seo: {
      title: 'TypeScript Counter | AOC Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/skeleton-loading',
    exact: true,
    loadData: async () => new Promise((r) => {
      setTimeout(() => {
        fetch('https://www.atyantik.com/wp-json/wp/v2/posts/?per_page=4&_fields[]=title&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
          .then(res => res.json())
          .then(res => r(res));
      }, 1000);
    }),
    component: import('../components/skeleton-loading'),
    skeleton,
    seo: {
      title: 'Skeleton Loading | AOC Demo',
      description: 'Tired of adding ugly loaders? Do not let your users get confused, give them the best user experience of what is getting loaded. Use Skeleton Loading',
      image: SkeletonImage,
    },
  },
  {
    path: '/image-optimization',
    exact: true,
    component: import('../components/image-optmization'),
    seo: {
      title: 'Image Optimization | AOC Demo',
      description: 'Serve optimize images automatically with Lazy loading and WebP support with fallback to JPG/PNG of original image.',
      image: ImageOptimizationImage,
    },
  },
  {
    path: '/contribute',
    exact: true,
    component: import('../components/contribute'),
    seo: {
      title: 'Contribute | AOC Demo',
      description: 'Be a part of larger family. Get involved with us and support our project ReactPWA',
    },
  },
];

import ContentLoader from "react-content-loader";

export const DoughnutSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={400}
    height={488}
    viewBox="0 0 400 488"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="187" cy="177" r="128" />
    <rect x="13" y="343" rx="0" ry="0" width="340" height="40" />
    <rect x="14" y="403" rx="0" ry="0" width="340" height="40" />
  </ContentLoader>
);

import ContentLoader from "react-content-loader";

export const LineSkeleton = (props: any) => (
  <ContentLoader
    speed={10}
    width={1400}
    height={200}
    viewBox="0 0 1400 200"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="1400" height="200" />
  </ContentLoader>
);

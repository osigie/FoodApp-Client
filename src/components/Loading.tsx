

type LoadingProps = {
center: string;
}


const Loading = (props: LoadingProps ) => {
  return <div className={props.center ? "loading loading-center" : "loading"}></div>;
};

export default Loading;

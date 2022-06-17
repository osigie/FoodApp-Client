type Props = {
  msg: string;
  alertType: string;
};

const Alert = (props: Props) => {
  return <div className={`alert alert-${props.alertType}`}>{props.msg}</div>;
};

export default Alert;

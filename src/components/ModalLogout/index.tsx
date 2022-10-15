import { FC } from "react";
import Button from "../../common/Button";
import { handleLogOut } from "../../services/services";
import styles from "./ModalLogout.module.scss";

interface IModalLogoutProps {
  handleClose: () => void;
}

const ModalLogout: FC<IModalLogoutProps> = ({ handleClose }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Hey, Wait!!</h2>
      <p className={styles.para}>Are you sure you want to Logout?</p>
      <div className={styles.btn_container}>
        <Button title="Yes, Logout" variant="small" onClick={handleLogOut} />
        <Button
          title="Cancel"
          isDark={true}
          variant="small"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default ModalLogout;

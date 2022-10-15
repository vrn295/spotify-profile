import { useRef, useState } from "react"

const useNavbarView = () => {
  const [isLogoutConfimationOpen, setisLogoutConfimationOpen] = useState(false)

  const logoutRef = useRef(null)

  const handleLogoutModalOpen = () => {
    setisLogoutConfimationOpen(true)
  }

  const handleLogoutModalClose = () => {
    setisLogoutConfimationOpen(false)
  }

  return {
    logoutRef,
    isLogoutConfimationOpen,
    setisLogoutConfimationOpen,
    handleLogoutModalOpen,
    handleLogoutModalClose,
  }
}

export default useNavbarView
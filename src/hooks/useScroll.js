import React,{useState,useEffect} from 'react'

function useScroll(heightVisible) {
     const [visible, setVisible] = useState(false);

     useEffect(() => {
       window.addEventListener("scroll", listenToScroll);
       return () => window.removeEventListener("scroll", listenToScroll);
     }, []);

     const listenToScroll = () => {
       // let heightToShowFrom = 600;
       const winScroll =
         document.body.scrollTop || document.documentElement.scrollTop;

       if (winScroll > heightVisible) {
         // to limit setting state only the first time
         setVisible(true);
       } else {
         setVisible(false);
       }
     };
  return (
    [visible]
  )
}

export default useScroll
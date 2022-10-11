import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  MutableRefObject,
  memo,
} from "react";
import { FiSend } from "react-icons/fi";
import { BsEmojiSmile, BsCardImage } from "react-icons/bs";
import Picker, { EmojiClickData } from "emoji-picker-react";
import { AuthContext} from "../../context/AuthContext";

import firebase from "firebase";
import { db, storage } from "../../config/firebase";
import { v4 as uuidv4 } from "uuid";
import "./_input.scss"


// protect chat bang file
// TODO : ko up dc cai anh giong het vua up
function Input(props) {
  // chosenEmoji.emoji
  // useEffect when chosen emoji change
  const [chosenEmoji, setChosenEmoji] = useState();
  const [showEmoji, setShowEmoji] = useState(false);
  const [files, setFiles] = useState(null);
  const fileRef = useRef(null);
  const [text, setText] = useState("");
  const { currentUser } = useContext(AuthContext);
  // console.log("User:" + currentUser.uid);

  const [arrayFiles, setArray] = useState ([]);
  const handleSend = async () => {
    if (text === "") return;
    db.collection("messages").add({
      text: text,
      uid: currentUser.uid,
      photoURL: currentUser.photoURL
        ? currentUser.photoURL
        : "https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      roomId: props.roomId,
      // roomId: selectedRoom.id,  can them roomId
      displayName: `Guest${currentUser.uid}`,
    });

    setText("");
  };
  const handleFileClick = (e) => {
    e.preventDefault();
    const files = e.target.files;
    setFiles(files);
  };

  useEffect(() => {
    // const arrayFile: string[] = [];
    const promises = [];
    const uploadImage = async (file) => {
      //  const imageName = uuidv4() + "." + file.name.split(".").pop();

      const imageName = uuidv4() + "." + file.name.split(".")[0];
      try {
        // quan ly theo room iD HAY roomName
        const uploadTask = storage
          .ref(`/images/${props.roomId}/${imageName}`)
          .put(file);
        promises.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapShot) => {
            console.log(snapShot);
          },
          (err) => {
            console.log(err);
          },
          async () => {
            await storage
              .ref(`images/${props.roomId}`)
              .child(imageName)
              .getDownloadURL()
              .then((fireBaseUrl) => {
                setArray((prevState) => [...prevState, fireBaseUrl]);
              });
          },
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (files != null) {
      //  upload file anh lay ve url
      Array.from(files).map((file,index) => {
        console.log(file);
        uploadImage(file);
      });
      console.log("upload finish");

      Promise.all(promises)
        .then(() => console.log("All images uploaded"))
        .catch((err) => console.log(err));
    }
    console.log("file render");
    // them che do dang load anh de canh bao
  }, [files]);

  useEffect(() => {
    if (
      props.roomId &&
      arrayFiles.length === files?.length &&
      files?.length != 0
    ) {
      db.collection("messages").add({
        // text: "123456789",
        images: arrayFiles,
        uid: currentUser.uid,
        photoURL: currentUser.photoURL
          ? currentUser.photoURL
          : "https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        roomId: props.roomId,
        displayName: `Guest${currentUser.uid}`,
      });
      console.log(arrayFiles);
      setArray([]);
      setFiles(null);
      if (fileRef.current != null) {
        fileRef.current.value = "";
      }
      console.log("array file render done ");
    }
    console.log(arrayFiles);
  }, [arrayFiles]);

  // files?.length!=0 && arrayFiles.length === files?.length
  const handleImageClick = () => {
    if (fileRef.current !== null) {
      fileRef.current.click();
    }
  };

  const handleShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };

  const handleEmojiClick = (emojiObject, event) => {
    setChosenEmoji(emojiObject);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (typeof chosenEmoji != "undefined") {
      setText(text + chosenEmoji?.emoji);
    }
  }, [chosenEmoji]);

  return (
    <>
      <div className="chat-container">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Nhap tin nhan"
          className="chat-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <BsEmojiSmile
          style={{
            height: "30px",
            fontSize: "1.5rem",
            margin: "10px 12px 0px 0px",
            color: "grey",
          }}
          onClick={handleShowEmoji}
        />
        <div className="file-input">
          <input
            type="file"
            ref={fileRef}
            multiple
            onChange={handleFileClick}
          ></input>
          <BsCardImage
            style={{
              height: "30px",
              fontSize: "1.5rem",
              margin: "10px 12px 0px 0px",
              color: "grey",
            }}
            onClick={handleImageClick}
          />
        </div>

        <FiSend
          style={{
            height: "30px",
            fontSize: "1.5rem",
            margin: "10px 16px 0px 0px",
            color: "grey",
          }}
          onClick={handleSend}
        />

        <div className={`emoji-list ${showEmoji ? "show" : "hidden"}" `}>
          {showEmoji && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
    </>
  );
}

export default memo(Input);

/*   `` : expand template string
 `emoji-list ${showEmoji ? "show" : "hidden"}" `
      */

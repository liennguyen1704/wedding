import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { IUser } from "../../type";

export default function Part8() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "user"), (snapshot) => {
      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as IUser[];
      setUsers(userList.filter((_item) => _item.isPublicMessage));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div id="SECTION18" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="BOX78" className="ladi-element ladi-animation-hidden">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX77" className="ladi-element ladi-animation-hidden">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX58" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="HTML_CODE7" className="ladi-element">
          <div className="ladi-html-code">
            {/* messaeboxx */}
            <style>
              {`
            #MessageBox > * {
              color: #ffffff;
            }

            ::-webkit-scrollbar {
              width: 3px; /* Chiều rộng của thanh cuộn */
            }

            ::-webkit-scrollbar-thumb {
              background: #888;
            }

            #MessageBox {
              padding: 30px;
            }

            .MessageBox-item {
              border-bottom: 1px dashed #545454;
              margin: 15px 0px;
            }

            .MessageBox-item-name {
              font-size: 20px;
              font-weight: bold;
              margin: 10px 0px;
            }

            .MessageBox-item-message {
              margin-bottom: 10px;
            }
          `}
            </style>
            <div id="MessageBox">
              {users.map((user) => (
                <div className="MessageBox-item" key={user.id}>
                  <h2 className="MessageBox-item-name">{user.name}</h2>
                  <p className="MessageBox-item-message">{user.message}</p>
                </div>
              ))}
            </div>
            <script
              src="https://www.27biggroup.com/librarywedding/functionWedding/MessageBoxFunction.js"
              async
            ></script>
            <script>
              {`run_MessageBox("#BUTTON40", '1Rnf7Ge7UXsZWG-O-YSzbEwsS6zn89k67fAS346hbb_o', 'LadiPage', 1, 6, 5, "Mọi người")`}
            </script>
          </div>
        </div>
        <div id="IMAGE99" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE157" className="ladi-element ladi-animation-hidden">
          <h3 className="ladi-headline">LỜI CHÚC TỪ KHÁCH MỜI</h3>
        </div>
        <div id="IMAGE100" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

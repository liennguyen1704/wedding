import { useParams } from "react-router";
import { DEFINE_DEFAULT_MOCK_DATA } from "../../constants/rule";
import { useEffect, useState } from "react";
import { IUser } from "../../type";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const DEFINE_DATA = {
  month: "Tháng 3",
  dayOfWeek: "THỨ HAI",
  day: "24",
  year: "2025",
  title: "Ngày cưới",
};

export default function Part1() {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();

  const handleGetUser = async () => {
    try {
      if (!id) {
        throw new Error("User ID is undefined");
      }
      const userDoc = doc(db, "user", id);
      const userSnapshot = await getDoc(userDoc);
      setUser(userSnapshot.data() as IUser);
    } catch (error) {
      console.log("🚀 ~ handleGetUser ~ error:", error);
    }
  };

  useEffect(() => {
    if (id) handleGetUser();
    else {
      setUser(DEFINE_DEFAULT_MOCK_DATA);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div id="SECTION1" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-overlay"></div>
      <div className="ladi-container">
        <div id="BOX65" className="ladi-element ladi-animation">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="IMAGE4" className="ladi-element ladi-animation">
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url('/part1/part1.jpg')`,
              }}
            ></div>
          </div>
        </div>
        <div id="GROUP92" className="ladi-element">
          <div className="ladi-group">
            <div id="BOX62" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="HEADLINE160" className="ladi-element ladi-animation">
              <h3 className="ladi-headline">{DEFINE_DATA.dayOfWeek}</h3>
            </div>
          </div>
        </div>
        <div id="GROUP93" className="ladi-element">
          <div className="ladi-group">
            <div id="BOX63" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="HEADLINE161" className="ladi-element ladi-animation">
              <h3 className="ladi-headline">{DEFINE_DATA.year}</h3>
            </div>
          </div>
        </div>
        <div id="HEADLINE162" className="ladi-element ladi-animation">
          <h3 className="ladi-headline">Wedding</h3>
        </div>
        <div id="HEADLINE163" className="ladi-element ladi-animation">
          <h3 className="ladi-headline">{DEFINE_DATA.title}</h3>
        </div>
        <div id="HEADLINE167" className="ladi-element ladi-animation">
          <h3 className="ladi-headline ladi-transition">TRÂN TRỌNG KÍNH MỜI</h3>
          <h3
            className="ladi-headline ladi-transition"
            style={{
              fontFamily: "REZWTiBCZWFdHkgUmVmbGVjdGlvbnMubRm",
              fontSize: "30px",
              color: "#ffffff",
              fontWeight: "lighter",
            }}
          >
            " {user?.name ?? "Bạn/Anh/chị"} "
          </h3>
        </div>
        {/* <div
          id="PARAGRAPH61"
          className="ladi-element class_tenKhachMoi ladi-animation"
        >
          <div className="ladi-paragraph ladi-transition">
            <span
              style={{
                padding: "4px 20px",
                borderRadius: "15px",
                border: "1px solid #ffffff",
              }}
            >
              Bạn và Gia Đình
            </span>
          </div>
        </div> */}
        <div id="BOX60" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="GROUP158" className="ladi-element ladi-animation">
          <div className="ladi-group">
            <div id="HEADLINE158" className="ladi-element">
              <h3 className="ladi-headline">
                {DEFINE_DATA.month}
                <br />
              </h3>
            </div>
            <div id="HEADLINE159" className="ladi-element">
              <h3 className="ladi-headline">{DEFINE_DATA.day}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router";
import {
  DEFINE_ARRIVE,
  DEFINE_DEFAULT_MOCK_DATA,
  DEFINE_PUBLIC_MESSAGE,
} from "../../constants/rule";
import { useEffect, useState } from "react";
import { IUser } from "../../type";
import onRemoveParams from "../../on-remove-params";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Part7() {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();
  const [form, setForm] = useState<{
    arrive: string;
    guestBy?: "GROM" | "BRIDE" | undefined;
    isPublicMessage?: boolean | undefined;
    message?: string | undefined;
  }>({
    arrive: "Mình chắc chắn sẽ đến",
  });

  const handleGetUser = async () => {
    try {
      if (!id) {
        throw new Error("User ID is undefined");
      }
      const userDoc = doc(db, "user", id);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
      setUser(userData as IUser);
      setForm({
        arrive: userData?.arrive || "Mình chắc chắn sẽ đến",
        guestBy: userData?.guestBy,
        isPublicMessage: userData?.isPublicMessage,
        message: userData?.message,
      })
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

  const handleSubmit = async () => {
    try {
      if (!form) return;
      if (!id) {
        throw new Error("User ID is undefined");
      }
      const userDoc = doc(db, "user", id);
      await updateDoc(userDoc, onRemoveParams(form, [false]));
      window.alert("Cảm ơn bạn đã phản hồi nha!!!");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <div id="SECTION23" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="BOX70" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div data-action="true" id="IMAGE110" className="ladi-element">
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url(/part7/part7.jpg)`,
                backgroundPositionY: "0px",
                backgroundPositionX: "0px",
              }}
            ></div>
          </div>
        </div>
        <div id="GROUP117" className="ladi-element">
          <div className="ladi-group">
            <div id="PARAGRAPH94" className="ladi-element">
              <div className="ladi-paragraph">BẠN SẼ ĐẾN CHỨ</div>
            </div>
            <div id="PARAGRAPH95" className="ladi-element">
              <div className="ladi-paragraph">XÁC NHẬN</div>
            </div>
          </div>
        </div>
        <div id="PARAGRAPH96" className="ladi-element">
          <div className="ladi-paragraph">
            Chúng mình rất chờ đón sự kiện trọng đại này của cuộc đời. Xin hãy
            xác nhận sự có mặt của mình để chúng mình chuẩn bị đón tiếp một cách
            chu đáo nhất nhé! Trân trọng!
          </div>
        </div>
        <div id="GROUP118" className="ladi-element">
          <div className="ladi-group">
            <div
              id="FORM5"
              data-config-id="663edb65c9c5120012ef6f25"
              className="ladi-element"
            >
              <form autoComplete="off" className="ladi-form">
                <div
                  id="BUTTON40"
                  className="ladi-element"
                  onClick={handleSubmit}
                >
                  <div className="ladi-button">
                    <div className="ladi-button-background"></div>
                    <div
                      id="BUTTON_TEXT40"
                      className="ladi-element ladi-button-headline"
                    >
                      <p className="ladi-headline">XÁC NHẬN THAM DỰ</p>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM16" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item-background"></div>
                    <div className="ladi-form-item">
                      <input
                        autoComplete="off"
                        tabIndex={1}
                        name="name"
                        required
                        disabled
                        className="ladi-form-control"
                        type="text"
                        placeholder={`Kính mời ${user?.name ?? "Bạn/Anh/chị"}`}
                      />
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM17" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item-background"></div>
                    <div className="ladi-form-item">
                      <textarea
                        autoComplete="off"
                        tabIndex={6}
                        name="message"
                        className="ladi-form-control"
                        placeholder="Gửi lời chúc đến cô dâu chú rể..."
                        value={form?.message}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            message: e.target.value,
                            arrive: form
                              ? form.arrive
                              : "Mình chắc chắn sẽ đến",
                            guestBy: form?.guestBy,
                            isPublicMessage: form?.isPublicMessage,
                          });
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM18" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item-background"></div>
                    <div className="ladi-form-item">
                      <select
                        tabIndex={2}
                        name="form_item6"
                        required
                        className="ladi-form-control ladi-form-control-select"
                        data-selected=""
                        value={form?.arrive}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            arrive: e.target.value,
                            guestBy: form?.guestBy,
                            isPublicMessage: form?.isPublicMessage,
                            message: form?.message,
                          });
                        }}
                      >
                        <option value="" className="ladi-hidden" disabled>
                          Bạn sẽ đến chứ ?
                        </option>
                        {DEFINE_ARRIVE.map((_item) => (
                          <option key={_item.value} value={_item.value}>
                            {_item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM20" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item-background"></div>
                    <div className="ladi-form-item">
                      <select
                        tabIndex={5}
                        name="form_item12"
                        className="ladi-form-control ladi-form-control-select"
                        data-selected=""
                        value={form?.isPublicMessage ? 1 : 0}
                        onChange={(e) => {
              
                          setForm({
                            ...form,
                            isPublicMessage: Boolean(Number(e.target.value)),
                            guestBy: form?.guestBy,
                            arrive: form?.arrive ?? "Mình chắc chắn sẽ đến",
                            message: form?.message,
                          });
                        }}
                      >
                        <option value="">Ai sẽ thấy lời chúc của bạn?</option>
                        {DEFINE_PUBLIC_MESSAGE.map((_item) => (
                          <option key={_item.value} value={_item.value}>
                            {_item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div id="FORM_ITEM21" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <div className="ladi-form-item-background"></div>
                    <div
                      className="ladi-form-item ladi-form-checkbox ladi-form-checkbox-horizontal"
                      ladi-checkbox-required="true"
                    >
                      <div className="ladi-form-checkbox-box-item">
                        <div className="ladi-form-checkbox-item">
                          <input
                            tabIndex={4}
                            name="form_item13"
                            type="checkbox"
                            value="GROM"
                            checked={form?.guestBy === "BRIDE"}
                            onChange={(e) => {
                              const checked = e.target.checked;

                              setForm({
                                ...form,
                                guestBy: checked ? "BRIDE" : "GROM",
                                arrive: form?.arrive || "Mình chắc chắn sẽ đến",
                                isPublicMessage: form?.isPublicMessage,
                                message: form?.message,
                              });
                            }}
                          />
                          <span data-checked="false">Cô dâu</span>
                        </div>

                        <div className="ladi-form-checkbox-item">
                          <input
                            tabIndex={4}
                            name="form_item13"
                            type="checkbox"
                            value="GROM"
                            checked={form?.guestBy === "GROM"}
                            onChange={(e) => {
                              const checked = e.target.checked;

                              setForm({
                                ...form,
                                guestBy: checked ? "GROM" : "BRIDE",
                                arrive: form?.arrive || "Mình chắc chắn sẽ đến",
                                isPublicMessage: form?.isPublicMessage,
                                message: form?.message,
                              });
                            }}
                          />
                          <span data-checked="false">Chú rể</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="HEADLINE187" className="ladi-element">
              <h3 className="ladi-headline">
                &nbsp; Bạn là khách mời của ai?
                <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

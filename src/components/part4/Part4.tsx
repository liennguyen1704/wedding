const IMAGE_1 = "/part4/part4_1.jpg";
const IMAGE_2 = "/part4/part4_2.jpg";

export default function Part4() {
  return (
    <div id="SECTION21" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="IMAGE102" className="ladi-element ladi-animation-hidden">
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url(${IMAGE_1})`,
              }}
            ></div>
          </div>
        </div>
        <div id="GROUP100" className="ladi-element">
          <div className="ladi-group">
            <div
              id="PARAGRAPH64"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-paragraph">Cô dâu</div>
            </div>
            <div
              id="HEADLINE182"
              className="ladi-element ladi-animation-hidden"
            >
              <h3 className="ladi-headline">
                Nguyễn Liên
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH65" className="ladi-element">
              <div className="ladi-paragraph"></div>
            </div>
          </div>
        </div>
        <div id="IMAGE103" className="ladi-element ladi-animation-hidden">
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url(${IMAGE_2})`,
              }}
            ></div>
          </div>
        </div>
        <div id="GROUP101" className="ladi-element">
          <div className="ladi-group">
            <div
              id="PARAGRAPH66"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-paragraph">Chú rể</div>
            </div>
            <div
              id="HEADLINE183"
              className="ladi-element ladi-animation-hidden"
            >
              <h3 className="ladi-headline">
                Chu Quân
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH67" className="ladi-element">
              <div className="ladi-paragraph"></div>
            </div>
          </div>
        </div>
        <div id="GROUP102" className="ladi-element ladi-animation-hidden">
          <div className="ladi-group">
            <div id="PARAGRAPH68" className="ladi-element">
              <div className="ladi-paragraph">Cô dâu - Chú rể</div>
            </div>
            <div id="LINE19" className="ladi-element">
              <div className="ladi-line">
                <div className="ladi-line-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

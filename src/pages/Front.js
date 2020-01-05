import React, {Component} from 'react';
import '../App.css';

class Front extends Component{
	render(){
		return (
			<div>
				<h4 className="marginBottom">
					ตัวอย่างเว็บฟุตบอลที่อัพเดทอัตโมมัติ
				</h4>
				
				<div className="row">
					<div className="col-md-12">
						<h6>เหมาะสำหรับคนที่อยากปั้นเว็บไซต์ฟุตบอลเพื่อสร้างรายได้จากโฆษณา</h6>
						<ul>
							<li>อยากมีเว็บไซต์แต่ไม่มีเวลาดูแล แก้ด้วยระบบอัพเดทอัตโนมัติ</li>
							<li>เว็บฟุตบอลเป็นเว็บไซต์ที่มีป้ายโฆษณาราคาสูง</li>
							<li>ข้อมูลเนื้อหาอัพเดทใหม่เสมอ</li>
							<li>มีครบทุกลีกทั่วโลก</li>
							<li>ไม่ใช่เว็บรับพนันบอล</li>
						</ul>

						<h6>อัพเดทอัตโนมัติส่วนใดบ้าง</h6>
						<ul>
							<li>ผลการแข่งขัน</li>
							<li>สถิติหลังเกม</li>
							<li>สถิติการพบกัน H2H</li>
							<li>ราคา Odd จาก 10 โบรคเกอร์ดัง</li>
							<li>11 ผู้เล่นตัวจริง (อัพเดทอัตโนมัติ 20-40 นาทีก่อนแข่ง)</li>
							<li>รายชื่อตัวสำรอง</li>
							<li>แผนการเล่น</li>
							<li>โปรแกรมการแข่งขันนัดถัดไป</li>
							<li>โปรแกรมการแข่งขันทั้งฤดูกาล</li>
							<li>ตารางคะแนน</li>
							<li>รายชื่อนักเตะของแต่ละทีม</li>
							<li>การซื้อขายนักเตะของแต่ละทีม</li>
							<li>อันดับดาวซัลโว</li>
						</ul>
						
						<h6>แบบที่ 1 ราคา 3,999 บาท</h6>
						<ul>
							<li>เลือกได้ 1 ลีก เช่น อังกฤษพรีเมียร์ลีก</li>
							<li>ได้ระบบอัพเดทอัตโนมัติทั้งหมด</li>
							<li>ได้เว็บไซต์ในแบบที่ชอบตามใจ Theme ไม่ซ้ำใคร</li>
							<li>ฟรี ค่าบริการ API ปีแรก (ค่าบริการเดือนละ 150 บาท)</li>
							<li>ฟรี ค่าติดตั้ง 1,000 บาท</li>
							<li>ฟรี Domain 1 ปี</li>
							<li>ฟรี Hosting 1 ปี</li>
						</ul>

						<h6>แบบที่ 2 ราคา 5,999 บาท</h6>
						<ul>
							<li>เลือกได้ 1 ลีก เช่น อังกฤษพรีเมียร์ลีก</li>
							<li>ได้ระบบอัพเดทอัตโนมัติทั้งหมด</li>
							<li>ได้เว็บไซต์ในแบบที่ชอบตามใจ Theme ไม่ซ้ำใคร</li>
							<li>ได้ระบบข่าวสารและคลิปไฮไลท์</li>
							<li>ได้ระบบ Banner ป้ายโฆษณา</li>
							<li>ได้ระบบแอดมินดูแลเว็บไซต์</li>
							<li>ฟรี ค่าบริการ API ปีแรก (ค่าบริการเดือนละ 150 บาท)</li>
							<li>ฟรี ค่าติดตั้ง 1,000 บาท</li>
							<li>ฟรี Domain 1 ปี</li>
							<li>ฟรี Hosting 1 ปี</li>
						</ul>

						<h6>แบบที่ 3 ราคา 8,999 บาท</h6>
						<ul>
							<li>เลือกได้ 4 ลีก เช่น อังกฤษพรีเมียร์ลีก, ลาลีกา, บุนเดสลีกา, กัลโช่ซีเรียอา</li>
							<li>ได้ระบบอัพเดทอัตโนมัติทั้งหมด</li>
							<li>ได้เว็บไซต์ในแบบที่ชอบ Theme ไม่ซ้ำใคร</li>
							<li>ได้ระบบข่าวสารและคลิปไฮไลท์</li>
							<li>ได้ระบบ Banner ป้ายโฆษณา</li>
							<li>ได้ระบบแอดมินดูแลเว็บไซต์</li>
							<li>ฟรี ค่าบริการ API ปีแรก (ค่าบริการเดือนละ 250 บาท)</li>
							<li>ฟรี ค่าติดตั้ง 1,000 บาท</li>
							<li>ฟรี Domain 1 ปี</li>
							<li>ฟรี Hosting 1 ปี</li>
						</ul>

						<h6>แบบที่ 4 ราคา 12,999 บาท</h6>
						<ul>
							<li>เลือกได้ 10 ลีก</li>
							<li>ได้ระบบอัพเดทอัตโนมัติทั้งหมด</li>
							<li>ได้เว็บไซต์ในแบบที่ชอบ Theme ไม่ซ้ำใคร</li>
							<li>ได้ระบบข่าวสารและคลิปไฮไลท์</li>
							<li>ได้ระบบ Banner ป้ายโฆษณา</li>
							<li>ได้ระบบแอดมินดูแลเว็บไซต์</li>
							<li>ฟรี ค่าบริการ API ปีแรก (ค่าบริการเดือนละ 300 บาท)</li>
							<li>ฟรี ค่าติดตั้ง 1,000 บาท</li>
							<li>ฟรี Domain 1 ปี</li>
							<li>ฟรี Hosting 1 ปี</li>
						</ul>

						<h6>แบบที่ 5 ราคา 15,999 บาท</h6>
						<ul>
							<li>เลือกได้ 20 ลีก</li>
							<li>ได้ระบบอัพเดทอัตโนมัติทั้งหมด</li>
							<li>ได้เว็บไซต์ในแบบที่ชอบ Theme ไม่ซ้ำใคร</li>
							<li>ได้ระบบข่าวสารและคลิปไฮไลท์</li>
							<li>ได้ระบบ Banner ป้ายโฆษณา</li>
							<li>ได้ระบบแอดมินดูแลเว็บไซต์</li>
							<li>ฟรี ค่าบริการ API ปีแรก (ค่าบริการเดือนละ 350 บาท)</li>
							<li>ฟรี ค่าติดตั้ง 1,000 บาท</li>
							<li>ฟรี Domain 1 ปี</li>
							<li>ฟรี Hosting 1 ปี</li>
						</ul>

						<h6>แบบที่ 6 (Custom)</h6>
						<ul>
							<li>เลือก API บางส่วนนำไปใช้กับเว็บไซต์ที่คุณมีอยู่แล้ว</li>
							<li>ค่าบริการขึ้นอยู่กับ API ที่คุณเลือก</li>
							<li>สอบถามเพิ่มเติมเพื่อประเมินราคา</li>
						</ul>

						<h6>รายได้ 10% ทำบุญคนยากไร้ เหมือนได้อนุโมทนาบุญร่วมกันครับ</h6>
					</div>
				</div>
				<h4 className="marginTop marginBottom">
					ข่าวสารฟุตบอลอัพเดทล่าสุด
				</h4>
				<div className="row">
					<div className="col-md-4">
<div className="card">
<img src="./images/a1.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					</div>
					<div className="col-md-4">
<div className="card">
<img src="./images/a2.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					
					</div>
					<div className="col-md-4">
<div className="card">
<img src="./images/a3.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					</div>

					<div className="col-md-4">
<div className="card">
<img src="./images/a4.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					</div>

					<div className="col-md-4">
<div className="card">
<img src="./images/a1.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					</div>
					<div className="col-md-4">
<div className="card">
<img src="./images/a2.jpg" className="card-img-top" alt=""/>
<div className="card-body">
<p className="card-text">Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์</p>
</div>
</div>
					
					</div>
				</div>
				<p className="marginTop">
					<button className="right">หน้าถัดไป &rarr;</button>
				</p>
            </div>
		);
	}
}

export default Front;

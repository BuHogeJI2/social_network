const Sidebar = () => {
	return (
		<nav className="nav">
			<div className="nav-block profile-block">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbbWNIEz16l8oSPuCp39LHI869mMzDBJadnQ&usqp=CAU" alt="profile"/>
				<div className="nav-link-block"><span>Profile</span></div>
			</div>
			<div className="nav-block messages-block">
				<img src="https://readtextmessages.net/wp-content/uploads/2014/09/best-phone-to-read-text-messages-300x248.jpg" alt="message"/>
				<div className="nav-link-block"><span>Message</span></div>
			</div>
			<div className="nav-block news-block">
				<img src="https://lh3.googleusercontent.com/2I4ZgNCk5eyTu6l9OiCp1WL1STxMeG4Nszg_WMqLQY_YUzfMsGbCyVVx52cOrm_SbDzNQwXBbzT3sDPiONfq=s1500-pp" alt=""/>
				<div className="nav-link-block"><span>News</span></div>
			</div>
			<div className="nav-block music-block">
				<img src="https://wek.ru/webp/images/stalo-izvestno-kakuyu-muzyku-neobxodimo-slushat-dlya-povysheniya-samoocenki.jpg" alt="music"/>
				<div className="nav-link-block"><span>Music</span></div>
			</div>
			<div className="nav-block settings-block">
				<img src="https://aussiebornandbred.com.au/wp-content/uploads/2019/06/Trent-3-900x900.jpg" alt="settings"/>
				<div className="nav-link-block"><span>Settings</span></div>
			</div>
		</nav>
	)
}

export default Sidebar;
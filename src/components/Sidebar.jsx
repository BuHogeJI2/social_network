import css from './Sidebar.module.css'

const Sidebar = () => {
	return (
		<nav className="nav">
			<div className={css.item}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbbWNIEz16l8oSPuCp39LHI869mMzDBJadnQ&usqp=CAU" alt="profile"/>
				<div className={css.text_block}><span>Profile</span></div>
			</div>
			<div className={css.item}>
				<img src="https://readtextmessages.net/wp-content/uploads/2014/09/best-phone-to-read-text-messages-300x248.jpg" alt="message"/>
				<div className={css.text_block}><span>Message</span></div>
			</div>
			<div className={css.item}>
				<img src="https://lh3.googleusercontent.com/2I4ZgNCk5eyTu6l9OiCp1WL1STxMeG4Nszg_WMqLQY_YUzfMsGbCyVVx52cOrm_SbDzNQwXBbzT3sDPiONfq=s1500-pp" alt=""/>
				<div className={css.text_block}><span>News</span></div>
			</div>
			<div className={css.item}>
				<img src="https://wek.ru/webp/images/stalo-izvestno-kakuyu-muzyku-neobxodimo-slushat-dlya-povysheniya-samoocenki.jpg" alt="music"/>
				<div className={css.text_block}><span>Music</span></div>
			</div>
			<div className={css.item}>
				<img src="https://aussiebornandbred.com.au/wp-content/uploads/2019/06/Trent-3-900x900.jpg" alt="settings"/>
				<div className={css.text_block}><span>Settings</span></div>
			</div>
		</nav>
	)
}

export default Sidebar;
'use client'

import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState, ChangeEvent } from 'react';

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearInput = () => {
    setInputValue('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <>
      <div className="container">
        {/* search + profil */}
        <div className="searchProfil">
          <div className="search">
            <div className="searchIcon" onClick={handleSearchIconClick}>
              <FontAwesomeIcon
                style={{ fontSize: '3.5vw' }}
                icon={faMagnifyingGlass}
              />
            </div>
            <input type="text" ref={inputRef} value={inputValue} onChange={handleInputChange} placeholder="Search post" className="searchBar"/>
            {inputValue !== '' && (
              <button className="clear-input" onClick={clearInput}>
                X
              </button>
            )}
          </div>
          <div className="profilImage">
            <img src="/assets/image1.jpg" className="profil" alt="" />
          </div>
        </div>
        {/* ucapan */}
        <div className="wellcomeBanner">
          <img src="/assets/main/wellcome.png" className='banner' alt="" />
        </div>
        {/* tranding */}
        <div className="tranding">
          <div className="tranding1">
            <button>
              Trending
            </button>
          </div>
          <div className="tranding2">
            <button>
              New
            </button>
          </div>
          <div className="tranding3">
            <button>
              Culture
            </button>
          </div>
        </div>
        {/* content */}
        <div className="content">
          <div className="content1">
            <div className="profilUser">
              <img src="/assets/image2.jpeg" alt="" className="profilUserImage" />
              <div className="userTime">
                <p className="username">
                  Raiueueueueu
                </p>
                <p className="time">
                  17 hours ago
                </p>
              </div>
            </div>
            <div className="deskripsi">
              <p>
                I'm planning a cultural journey through Indonesia and would love to hear about your most memorable cultural experiences. Any hidden gems or unique festivals I should check out?
              </p>
            </div>
            <div className="kategori">
              <div className="kategori1">
                jakarta
              </div>
              <div className="kategori1">
                Indonesia
              </div>
              <div className="kategori1">
                Travel
              </div>
            </div>
            <div className="garis">
            </div>
            <div className="likeComment">
              <div className="like">
                <img src="/assets/main/icon/like.svg" alt="" className="iconLikeComment" />
                <p className="countLike">
                  13.895 likes
                </p>
              </div>
              <div className="comment">
                <img src="/assets/main/icon/comment.svg" alt="" className="iconLikeComment" />
                <p className="countComment">
                  378 replies
                </p>
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="profilUser">
              <img src="/assets/image3.jpeg" alt="" className="profilUserImage" />
              <div className="userTime">
                <p className="username">
                  Shikimorii:3
                </p>
                <p className="time">
                  23 hours ago
                </p>
              </div>
            </div>
            <div className="deskripsi">
              <p>
                Traditional Indonesian attire like the kebaya and sarong are not just clothing; they're expressions of cultural identity. Have you experienced or adopted any local fashion styles during your travels?
              </p>
            </div>
            <div className="kategori">
              <div className="kategori1">
                Semarang
              </div>
              <div className="kategori1">
                Jawa
              </div>
            </div>
            <div className="garis">
            </div>
            <div className="likeComment">
              <div className="like">
                <img src="/assets/main/icon/like.svg" alt="" className="iconLikeComment" />
                <p className="countLike">
                  69 likes
                </p>
              </div>
              <div className="comment">
                <img src="/assets/main/icon/comment.svg" alt="" className="iconLikeComment" />
                <p className="countComment">
                  7 replies
                </p>
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="profilUser">
              <img src="/assets/image4.jpeg" alt="" className="profilUserImage" />
              <div className="userTime">
                <p className="username">
                  Rusdi JMK48
                </p>
                <p className="time">
                  1 days ago
                </p>
              </div>
            </div>
            <div className="deskripsi">
              <p>
                In your opinion, how does wearing traditional clothing contribute to a deeper understanding and appreciation of the local culture? Have you found it to be a meaningful way to connect with the communities you visit?
              </p>
            </div>
            <div className="kategori">
              <div className="kategori1">
                Ngawi
              </div>
              <div className="kategori1">
                Travel
              </div>
              <div className="kategori1">
                Indonesia
              </div>
              <div className="kategori1">
                Question
              </div>
              <div className="kategori1">
                JMK48_LOCAL
              </div>
            </div>
            <div className="garis">
            </div>
            <div className="likeComment">
              <div className="like">
                <img src="/assets/main/icon/like.svg" alt="" className="iconLikeComment" />
                <p className="countLike">
                  134 likes
                </p>
              </div>
              <div className="comment">
                <img src="/assets/main/icon/comment.svg" alt="" className="iconLikeComment" />
                <p className="countComment">
                  14 replies
                </p>
              </div>
            </div>
          </div>
          <div className="content1">
            <div className="profilUser">
              <img src="/assets/image5.jpeg" alt="" className="profilUserImage" />
              <div className="userTime">
                <p className="username">
                  HengkerSMG64
                </p>
                <p className="time">
                  1 days ago
                </p>
              </div>
            </div>
            <div className="deskripsi">
              <p>
                During your travels, have you ever embraced or adopted local fashion styles, particularly traditional Indonesian attire like the kebaya and sarong? If so, what was your experience like?
              </p>
            </div>
            <div className="kategori">
              <div className="kategori1">
                Semarang
              </div>
              <div className="kategori1">
                Indonesia
              </div>
            </div>
            <div className="garis">
            </div>
            <div className="likeComment">
              <div className="like">
                <img src="/assets/main/icon/like.svg" alt="" className="iconLikeComment" />
                <p className="countLike">
                  1.391 likes
                </p>
              </div>
              <div className="comment">
                <img src="/assets/main/icon/comment.svg" alt="" className="iconLikeComment" />
                <p className="countComment">
                  140 replies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="navbar">
        <div className="round"></div>
        <div className="iconDesc">
          <img src="/assets/main/icon/icon_home.png" className='iconImage' id="iconImage1" alt="" />
          <p id='iconText1'>
            Home
          </p>
        </div>
        <div className="iconDesc">
          <img src="/assets/main/icon/icon_search.png" className='iconImage' id='iconImage2' alt="" />
          <p>
            Search
          </p>
        </div>
        <div className="iconDesc">
          <img src="/assets/main/icon/icon_new post.png" className='iconImage' alt="" />
          <p>
            New Post
          </p>
        </div>
        <div className="iconDesc">
          <img src="/assets/main/icon/icon_notip.png" className='iconImage' alt="" />
          <p>
            Notify
          </p>
        </div>
        <div className="iconDesc">
          <img src="/assets/main/icon/icon_profile.png" className='iconImage' alt="" />
          <p>
            Account
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

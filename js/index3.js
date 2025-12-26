// Basic audio wiring for index3 page
(function(){
        const tracks = [
                { id:'Yesterday', artist:'朴宰范', title:'Yesterday', mp3:'Yesterday.mp3', cover:'Yesterday.png', duration:'',
                    lyrics: [
                        'Yesterday - 朴宰范',
                        'Composed by：Cha Cha Malone/박재범/Chucky Kim',
                        'Arranged by：Cha Cha Malone/Chucky Kim',
                        'Your love’s the sweetest sound',
                        'Around u my heart just pounds',
                        'Your touch I’ll write it down',
                        'So high I can’t come down',
                        "Was hopeless took notice",
                        "Baby like a siren",
                        "And u gave me faith",
                        "You’re the answer all my problems solved",
                        "Life with u is so beautiful",
                        "I won’t trade it away",
                        "I was lost but found my purpose now",
                       " I’m glad you’re keepin’ me around",
                       " I won’t trade it away",
                        "Whether I’m up or down",
                        "Or I wear no crown",
                       " Love me the same way the same way",
                       " U did as yesterday",
                       " Whether I’m rich or poor",
                        "Just call me yours",
                        "Love me the same way the same way",
                       " U did as yesterday",
                       " Oh oh",
                      "  Oh oh",
                       " Did as yesterday",
                        "Your smile is all I need",
                        "Without u these lungs can’t breathe",
                       " I’d fall from the sky for u",
                       " Wanna do better and thrive for u",
                        "Was hopeless took notice",
                       " Baby like a siren",
                        "And u gave me faith",
                       " You’re the answer all my problems solved",
                        "Life with u is so beautiful",
                        "I won’t trade it away",
                        "I was lost but found my purpose now",
                        "I’m glad you’re keepin’ me around",
                       " And I won’t trade it away",
                       " Whether I’m up or down",
                       " Or I wear no crown",
                        "Love me the same way the same way",
                        "U did as yesterday",
                        "Whether I’m rich or poor",
                        "Just call me yours",
                        "Love me the same way the same way",
                        "U did as yesterday",
                       " Oh oh oh oh oh",
                       " Oh oh oh oh",
                        "Oh oh",
                        "Oh oh oh oh oh",
                        "Oh oh"
                    ]
                },
                { id:'좋아 (JOAH) (喜欢) (Re-Mastered)_H', artist:'JAY Park', title:'JOAH (Remastered)', mp3:'좋아 (JOAH) (喜欢) (Re-Mastered)_H.mp3', cover:'좋아 (JOAH) (喜欢) (Re-Mastered)_H.jpg',
                    lyrics: [
                        'JOAH (너무 좋아서) - JAY Park',
                        'Oh baby 너무 좋아서',
                        "You're driving me crazy",
                        '니 생각만해도 기분이 좋아',
                        '기분이 좋아 기분이 좋아',
                        'Na Na Na Na Na Na',
                        '이 느낌 너만 느끼게 할 수 있는 느낌',
                        '난 죽을때까지 느끼고 싶어',
                        '내 곁에 있어줘 아낄 수 있어 아낄 수 있어',
                        '언제나 너만 바라봐',
                        '나도 모르게 괜히 웃음이 나와',
                        'Oh baby baby baby baby',
                        '난 크게 소리 외치고 싶어',
                        '좋아 니 모든 것이 좋아',
                        '머리부터 발끝까지도',
                        '조그만 행동까지 하나 하나',
                        '다 좋아 니 모든 것이 좋아',
                        '너와 함께라면 즐거워',
                        '시간이 지날수록 더 좋아져',
                        '난 니가 필요해',
                        '매일같이 있게 해달라고 난 기도해',
                        '난 오직 너만이와 행복하게 살수가 있어',
                        'Yeah!~',
                        'Break it down now',
                        'Come on no no',
                        'Ay girl 너와 함께면 하루하루가 너무 특별해',
                        'Stay with me forever and ever baby please',
                        'And girl 우리가 운명 아니어도',
                        '난 무조건 너야',
                        'You know that I got you',
                        'You know that I love you',
                        "I'll always be with you baby",
                        '언제나 너만 바라봐',
                        '나도 모르게 괜히 웃음이 나와',
                        'Oh baby baby baby baby',
                        '난 크게 소리 외치고 싶어',
                        '좋아 니 모든 것이 좋아',
                        '머리부터 발끝까지도',
                        '조그만 행동까지 하나 하나',
                        '다 좋아 니 모든 것이 좋아',
                        '너와 함께라면 즐거워',
                        '시간이 지날수록 더 좋아져',
                        '난 니가 필요해',
                        '매일같이 있게 달라고 난 기도해',
                        '난 오직 너만이와 행복하게 살수가 있어',
                        '난 절대로 떨어지기 싫어',
                        '너를 보고 있어도 너무 보고 싶은걸',
                        '내 곁에 항상 있어줘 My girl',
                        'I want you and I need you',
                        "Don't ever ever leave my side",
                        '좋아 니 모든 것이 좋아',
                        '머리부터 발끝까지도',
                        '조그만 행동까지 하나 하나',
                        '다 좋아 니 모든 것이 좋아',
                        '너와 함께라면 즐거워',
                        '시간이 지날수록 더 좋아져',
                        '난 니가 필요해',
                        '매일같이 있게 달라고 난 기도해',
                        '난 오직 너만이와 행복하게 살수가 있어'
                    ]
                },
                { id:'몸매 (MOMMAE) (身姿) (Remix)', artist:'JAY Park', title:'MOMMAE (Remix)', mp3:'몸매 (MOMMAE) (身姿) (Remix).mp3', cover:'몸매 (MOMMAE) (身姿) (Remix).jpg',
                    lyrics: [
                        'MOMMAE (몸매) - JAY Park (Remix)',
                        'I be like hold up wait a minute girl',
                        '어딜 가 너무 쳐다봐서 미안해',
                        '근데 니가 너무 섹시해서',
                        '눈을 뗄 수가 없어',
                        '보고싶어 너의 몸몸몸매',
                        '몸몸몸매 몸몸몸매',
                        '너의 몸몸몸매 몸몸몸매',
                        'Oh yeah, let me see, let me see',
                        '니 앞에 서면',
                        '비욘세 엉덩이도 납작해',
                        '답답해 시원하게',
                        '그냥 갖다 대',
                        '구릿빛 피부의',
                        '니 허벅지는 탄탄해',
                        '택시 기사처럼 넌',
                        '쭉쭉 가고 빵빵 해',
                        '널 감상하는 게 변태 같으면',
                        '난 변태할래',
                        '진심이야 연기처럼 보이면',
                        '나는 담배',
                        '우리의 관계가 뭔지 모르지만',
                        '지금 소개받고 싶어',
                        '니 가슴에 달려있는 자매',
                        '쌍둥이 둥이',
                        'I want you to give it to me o0o0 weee',
                        'Twix처럼 있고 싶어 Baby',
                        '단 둘이 부비부비',
                        '춤은 내 침대에서 추지',
                        '규칙과 휴식 없이',
                        '너한테 계속 주지',
                        'Lets shoot a movie',
                        "They ain't f**king with us",
                        "Ahh nah they ain't f**kin with us",
                        "This ain't dj mustard",
                        'This is gray on the beats',
                        "B**ch it's aomg",
                        'We do it properly leggo',
                        'I be like hold up wait a minute girl',
                        '어딜 가 너무 쳐다봐서 미안해',
                        '근데 니가 너무 섹시해서',
                        '눈을 뗄 수가 없어',
                        '보고싶어 너의 몸몸몸매',
                        '몸몸몸매 몸몸몸매',
                        '너의 몸몸몸매 몸몸몸매',
                        'Oh yeah, let me see, let me see',
                        '목폴라를 입어도',
                        '태 나오는 몸매',
                        '목 메이네 괜히',
                        '칵테일 한 모금 더 해',
                        '멍해진 동공 내 초점은 동태',
                        '원초적 본능에 튼튼해진',
                        '내 떡매',
                        '보자마자 딱딱히 굳어',
                        '눈매가 메두사',
                        '쭉빵에 코피 터져',
                        '허리선이 펀치라인',
                        '피부는 미운 네 살',
                        '말투마저 귀여운 부산',
                        '부모님 한국 분 맞어',
                        '골반이 수입산',
                        '더우면 좀 더 벗어',
                        '바람직한 복장불량',
                        '맛이 궁금해',
                        '탐스러운 자연산 복숭아 수박',
                        '클럽 안은 이미 동물농장',
                        '넌 발정난 수컷들',
                        '다 불러모아 멕이는 사육사',
                        '이제 빠져나가자',
                        '이 마굿간에서',
                        'AOMG로 같이 온',
                        '친구들까지 다 데리고',
                        '누가 뭐래건 신경 안 쓰여',
                        '우린 우리 방식대로',
                        'Ey Yea It don\'t matter',
                        'I be like hold up wait a minute girl',
                        '어딜 가 너무 쳐다봐서 미안해',
                        '근데 니가 너무 섹시해서',
                        '눈을 뗄 수가 없어',
                        '보고싶어 너의 몸몸몸매',
                        '몸몸몸매 몸몸몸매',
                        '너의 몸몸몸매 몸몸몸매',
                        'Oh yeah, let me see, let me see',
                        'Woo you so sexy, sexy',
                        'Woo you so sexy, sexy',
                        'You so sexy girl',
                        'You so sexy girl',
                        'I be like hold up wait a minute girl',
                        '어딜 가 너무 쳐다봐서 미안해',
                        '근데 니가 너무 섹시해서',
                        '눈을 뗄 수가 없어',
                        '몸몸몸매 몸몸몸매',
                        '너의 몸몸몸매 몸몸몸매',
                        'Oh yeah, let me see, let me see',
                        'Let me see that right there MOMMAE'
                    ]
                },
                { id:'All_I_Wanna Do', artist:'JAY Park', title:'All I Wanna Do', mp3:'All_I_Wanna_Do.mp3', cover:'All_I_Wanna_Do.jpg',
                    lyrics: [
                        'All I Wanna Do - JAY Park',
                        'Girl 말해줘',
                        '네 마음 바로 지금',
                        'Baby 같이 올라가자 하늘 위로',
                        'All I wanna do is kick it with you',
                        '너의 몸매 그린 것만 같아 미술',
                        '오늘 의상처럼',
                        '네 마음도 씨쓰루',
                        'All I wanna do is kick it with you',
                        'Girl 뭐가 중요한지',
                        'Baby 바로 말해줄게',
                        '나 지금 5천만원짜리',
                        '시계 찼지만',
                        '나는 너를 훨씬 아끼지 babe',
                        '네가 원한다면 안 찰게',
                        '허세 따위는 안 통하니까',
                        '넌 정말 신기한 여자',
                        '나를 노력하게 만드니까',
                        'Baby oh yeah',
                        '우리 둘의 밤을',
                        '상상했어 girl all night',
                        '몸에 타투를 보여줘',
                        "If it's alright",
                        'Girl 말해줘',
                        '네 마음 바로 지금',
                        'Baby 같이 올라가자 하늘 위로',
                        'All I wanna do is kick it with you',
                        '너의 몸매 그린',
                        '것만 같아 미술',
                        '오늘 의상처럼',
                        '네 마음도 씨쓰루',
                        'All I wanna do is kick it with you',
                        '어떡해 내 맘에',
                        '네가 들어오려 해',
                        '쉽게 빠질까 봐 위험해',
                        '보여 조심하려 할 때',
                        '움직여지지 않아 날 보는',
                        '네 시선이 내 몸을 감아',
                        '하나로 얽혀 너와 나',
                        '이제부턴 아무도 풀지 못해',
                        '뻔하지 않게 우연같이 만나 baby',
                        '서로에게 녹아들어',
                        '오늘밤 우리 기분은',
                        '저 하늘 구름 위',
                        '네 몸에 타투를 보여줘 이미',
                        '내 맘은 준비되어있어',
                        'Boy 말할게',
                        '내 마음 바로 지금',
                        '그래 같이 올라가자 하늘 위로',
                        'All I wanna do is kick it with you',
                        '네가 원한대로',
                        '내 대답은 me too',
                        '이제부터 널',
                        '부르게 해줘 my boo',
                        'All I wanna do is kick it with you',
                        '내가 하고 싶은 모든 것 뒤엔',
                        '너와 함께',
                        '가 생략 되어 있지',
                        '요즘 인기 많은',
                        '교포오빠들과는 달라',
                        '김치 향기가 배어있지',
                        '덕분에 난 몰아 호랑이',
                        '택 달린 옷은 방에',
                        '쌓여가고 있어',
                        '밤에 입어 편하게',
                        '이젠 너는 나 나는',
                        '너로 구분 짓고',
                        'All I wanna do',
                        '라고 말해 편하게',
                        '너의 옆자리를 상상할 거고',
                        '그곳에는 내가 있게 될 거야',
                        '그리고 너에 대해 장담하건대',
                        '뭐든 할 수 있을',
                        '거라고 믿게 될 거야',
                        'Girl 말해줘',
                        '네 마음 바로 지금',
                        'Baby 같이',
                        '올라가자 하늘 위로',
                        'All I wanna do is kick it with you',
                        '너의 몸매 그린 것만 같아 미술',
                        '오늘 의상처럼',
                        '네 마음도 씨쓰루',
                        'All I wanna do is kick it with you'
                    ]
                },
                { id:'Like I Do (Jay Park Remix)', artist:'JAY Park', title:'Like I Do (Remix)', mp3:'Like I Do (Jay Park Remix).mp3', cover:'Like I Do (Jay Park Remix).jpg',
                    lyrics: [
                        'Like I Do (Remix) - JAY Park',
                        "That’s a drop top coupe",
                        "Said you wanna drive it down real soon",
                        "I just wanna love you like I do",
                        "‘Cause I never had someone like you",
                        "Ain’t nobody got this love",
                        "Got me cuffed",
                        "Ain’t nobody bae",
                        "All I need is love",
                        "I just wanna run away with you",
                        '살짝 미소 지어도',
                        'Driving me crazy',
                        '붙어있고 파',
                        'Everyday 매일',
                        '천억 짜리 회사 갖고 있지만',
                        '나는 너를 훨씬 아끼지 baby',
                        'Mayday',
                        '보고파 미치겠어',
                        '둘이 봐 오늘밤',
                        'Netflix 켜 와인 따고',
                        'Baby 짠하고 let’s play',
                        "That’s a drop top coupe",
                        "Said you wanna drive it down real soon",
                        "I just wanna love you like I do",
                        "‘Cause I never had someone like you",
                        "Ain’t nobody got this love",
                        "Got me cuffed",
                        "Ain’t nobody bae",
                        "All I need is love",
                        "I just wanna run away with you",
                        "Baby wanna let you know",
                        "You’re on my mind on my mind",
                        "Do you know I’m thinkin’ bout you",
                        "All the time all the time",
                        "Lemme pull up to the place you at",
                        "I’ll give you my heart",
                        "Baby just give it back",
                        "Cause all I wanna do",
                        "Is **** you till the early morning",
                        "That’s a drop top coupe",
                        "Said you wanna drive it down real soon",
                        "I just wanna love you like I do",
                        "‘Cause I never had someone like you",
                        "Ain’t nobody got this love",
                        "Got me cuffed",
                        "Ain’t nobody bae",
                        "All I need is love",
                        "I just wanna run away with you",
                        "Can’t nobody love you like I do",
                        "Can’t nobody love you like I do",
                        "Can’t nobody love you like I do",
                        "Like I do"
                    ]
                }
    ];

// 通过CSS选择器获取播放器的各个DOM元素
    const pbTrack = document.querySelector('.pb-track');  // 进度条轨道
    const pbBar = document.querySelector('.pb-bar');  // 进度条填充部分
    const pbDot = document.querySelector('.pb-dot');  // 进度条圆点
    const pbHover = document.querySelector('.pb-hover');  // 鼠标悬停时间显示
    const timeCur = document.querySelector('.pb-time-current');  // 当前时间显示
    const timeTotal = document.querySelector('.pb-time-total');  // 总时间显示
    const btnPlay = document.querySelector('.pb-play-toggle');  // 播放/暂停按钮
    const btnPrev = document.querySelector('.pb-prev');  // 上一首按钮
    const btnNext = document.querySelector('.pb-next');  // 下一首按钮
    const btnShuffle = document.querySelector('.pb-shuffle');  // 随机播放按钮
    const btnRepeat = document.querySelector('.pb-repeat');  // 循环模式按钮
    const coverImg = document.querySelector('.cover-img');  // 封面图片元素
    const titleEl = document.querySelector('.track-title');  // 歌曲标题元素
    const artistEl = document.querySelector('.artist');  // 艺术家元素
    const titleRow = document.querySelector('.pb-title');  // 标题行元素
    const lyricsCard = document.querySelector('.lyrics-card');  // 歌词卡片容器
    const btnPlaylist = document.querySelector('.pb-playlist-toggle');  // 播放列表切换按钮
    const playlistPanel = document.querySelector('.playlist');  // 播放列表面板
    const playlistClose = document.querySelector('.playlist .playlist-close');  // 播放列表关闭按钮
    const playlistList = document.querySelector('.playlist-list');  // 播放列表容器
    const volumeSlider = document.querySelector('.pb-volume-slider');  // 音量滑块
    const muteBtn = document.querySelector('.pb-mute');  // 静音按钮
    const speedSelect = document.querySelector('.pb-speed-select');  // 播放速度选择器
    const lyricsFollowChk = document.querySelector('.lyrics-follow');  // 歌词跟随复选框

 // 创建Audio对象用于播放音频
    let audio = new Audio();
    // 当前播放曲目的索引
    let cur = 0;
    // 是否开启随机播放
    let isShuffle = false;
    // 循环模式：'list'(列表循环) | 'one'(单曲循环) | 'order'(顺序播放)
    let repeatMode = 'list';
    // 是否正在拖动进度条
    let dragging = false;
    // 可用的播放模式数组
    const playModes = ['list', 'one', 'order'];

    // 格式化时间函数，将秒转换为"mm:ss"格式
    function formatTime(sec) {
        // 如果不是有效数字，返回"00:00"
        if (!isFinite(sec)) return '00:00';
        // 计算分钟数
        const m = Math.floor(sec / 60);
        // 计算剩余秒数
        const s = Math.floor(sec % 60);
        // 返回格式化字符串，个位数补零
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // 加载指定索引的曲目
    function loadTrack(index, autoplay = false) {
        // 更新当前索引
        cur = index;
        // 获取对应曲目数据
        const t = tracks[cur];
        // 设置音频源文件路径
        audio.src = `./mp3/${t.mp3}`;
        // 根据循环模式设置音频是否循环
        audio.loop = (repeatMode === 'one');
        
        // 更新UI显示
        // 显示歌曲标题
        if (titleEl) titleEl.textContent = t.title || t.id;
        // 显示艺术家
        if (artistEl) artistEl.textContent = t.artist || '';
        // 显示标题行（包含标题和艺术家）
        if (titleRow) titleRow.textContent = `${t.title || t.id} · ${t.artist || ''}`;
        // 显示封面图片
        if (t.cover && coverImg) { coverImg.src = `./images/cover/${t.cover}`; }
        // 渲染歌词
        if (lyricsCard) {
            renderLyrics(t);
            // 滚动到歌词顶部
            lyricsCard.scrollTop = 0;
        }
        // 如果指定了自动播放，则开始播放
        if (autoplay) audio.play();
        // 更新播放按钮图标
        updatePlayIcon();
        // 高亮播放列表中当前曲目
        highlightPlaylist();
    }

    // 更新播放/暂停按钮图标
    function updatePlayIcon() {
        if (!btnPlay) return;
        // 获取按钮内的图标元素
        const icon = btnPlay.querySelector('i');
        if (icon) icon.className = audio.paused ? 'fa fa-play' : 'fa fa-pause';
    }

    // 渲染歌词到歌词卡片
    function renderLyrics(track) {
        if (!lyricsCard) return;
        // 获取歌词数组，确保是数组格式
        const lines = track && track.lyrics && Array.isArray(track.lyrics) ? track.lyrics : null;
        if (!lines) {
            // 如果没有歌词，显示默认提示
            lyricsCard.innerHTML = `<p class="lyric-highlight">${track.title || track.id}</p><p>暂无歌词，稍后补充。</p>`;
            return;
        }
        // 将歌词数组转换为HTML段落元素
        lyricsCard.innerHTML = lines.map((l, idx) => {
            // 第一行歌词添加高亮样式
            if (idx === 0) { return `<p><span class="lyric-highlight">${l}</span></p>`; }
            return `<p>${l}</p>`;
        }).join('');
    }

    // 更新循环模式按钮图标
    function updateRepeatIcon() {
        if (!btnRepeat) return;
        // 如果是单曲循环模式，添加active类
        btnRepeat.classList.toggle('active', repeatMode === 'one');
        // 根据循环模式设置按钮提示文字
        btnRepeat.setAttribute('title', repeatMode === 'one' ? '单曲循环' : repeatMode === 'order' ? '顺序播放' : '列表循环');
    }

    // 更新随机播放按钮图标
    function updateShuffleIcon() {
        if (!btnShuffle) return;
        // 如果随机播放开启，添加active类
        btnShuffle.classList.toggle('active', isShuffle);
    }

    // 计算下一曲的索引
    function nextIndex() {
        // 如果开启了随机播放
        if (isShuffle) {
            let n = cur;
            // 确保随机到的不是当前曲目（除非只有一首歌）
            while (n === cur && tracks.length > 1) { n = Math.floor(Math.random() * tracks.length); }
            return n;
        }
        // 正常循环播放，到最后一首后回到第一首
        return (cur + 1) % tracks.length;
    }

    // 计算上一曲的索引
    function prevIndex() {
        // 如果开启了随机播放
        if (isShuffle) {
            let n = cur;
            // 确保随机到的不是当前曲目（除非只有一首歌）
            while (n === cur && tracks.length > 1) { n = Math.floor(Math.random() * tracks.length); }
            return n;
        }
        // 正常循环播放，到第一首后回到最后一首
        return (cur - 1 + tracks.length) % tracks.length;
    }

    // 播放/暂停切换函数
    function playPause() {
        // 根据当前播放状态切换
        if (audio.paused) { audio.play(); } else { audio.pause(); }
        updatePlayIcon();
    }

    // 时间更新回调函数
    function onTime() {
        // 如果音频时长无效，直接返回
        if (!audio.duration) return;
        // 计算播放进度百分比
        const pct = (audio.currentTime / audio.duration) * 100;
        // 更新进度条宽度
        if (pbBar) pbBar.style.width = pct + '%';
        // 更新进度条圆点位置
        if (pbDot) pbDot.style.left = pct + '%';
        // 更新当前时间显示
        if (timeCur) timeCur.textContent = formatTime(audio.currentTime);
        // 更新总时间显示
        if (timeTotal) timeTotal.textContent = formatTime(audio.duration);
        // 更新进度条的aria属性（无障碍访问）
        if (pbTrack) {
            pbTrack.setAttribute('aria-valuenow', pct.toFixed(1));
        }
        // 根据播放进度自动滚动歌词
        if (lyricsCard && audio.duration) {
            // 计算最大可滚动距离
            const maxScroll = lyricsCard.scrollHeight - lyricsCard.clientHeight;
            if (maxScroll > 0) {
                // 按播放比例设置滚动位置
                lyricsCard.scrollTop = maxScroll * (audio.currentTime / audio.duration);
            }
        }
    }

    // 根据鼠标点击位置跳转播放位置
    function seekByClientX(clientX) {
        // 如果进度条或音频时长不存在，直接返回
        if (!pbTrack || !audio.duration) return;
        // 获取进度条的边界框信息
        const rect = pbTrack.getBoundingClientRect();
        // 计算点击位置相对于进度条左边的距离
        let x = clientX - rect.left;
        // 限制x值在0到进度条宽度之间
        x = Math.max(0, Math.min(rect.width, x));
        // 计算点击位置的百分比
        const pct = x / rect.width;
        // 计算对应的时间位置
        const newTime = audio.duration * pct;
        // 设置音频当前时间
        audio.currentTime = newTime;
        // 更新时间显示
        onTime();
    }

    // 显示鼠标悬停时的时间提示
    function showHover(clientX) {
        // 如果相关元素不存在，直接返回
        if (!pbTrack || !pbHover || !audio.duration) return;
        const rect = pbTrack.getBoundingClientRect();
        let x = clientX - rect.left;
        x = Math.max(0, Math.min(rect.width, x));
        const pct = x / rect.width;
        // 计算悬停位置对应的时间
        const tt = audio.duration * pct;
        // 显示格式化后的时间
        pbHover.textContent = formatTime(tt);
        // 设置悬停提示位置
        pbHover.style.left = pct * 100 + '%';
    }

    // 绑定进度条相关事件
    function bindSeek() {
        if (!pbTrack) return;
        // 点击进度条跳转
        pbTrack.addEventListener('click', e => {
            seekByClientX(e.clientX);
        });
        // 鼠标按下开始拖动
        pbTrack.addEventListener('mousedown', e => {
            dragging = true; seekByClientX(e.clientX);
        });
        // 鼠标移动时更新位置（如果正在拖动）
        document.addEventListener('mousemove', e => { if (dragging) seekByClientX(e.clientX); });
        // 鼠标抬起结束拖动
        document.addEventListener('mouseup', () => { dragging = false; });
        // 触摸事件支持
        pbTrack.addEventListener('touchstart', e => { dragging = true; seekByClientX(e.touches[0].clientX); });
        pbTrack.addEventListener('touchmove', e => { if (dragging) seekByClientX(e.touches[0].clientX); });
        pbTrack.addEventListener('touchend', () => { dragging = false; });
        // 鼠标悬停显示时间
        pbTrack.addEventListener('mousemove', e => showHover(e.clientX));
        pbTrack.addEventListener('mouseenter', e => showHover(e.clientX));
    }

    // 音频播放结束回调函数
    function onEnded() {
        // 如果是单曲循环模式，重新播放当前曲目
        if (repeatMode === 'one') { audio.play(); return; }
        // 获取下一曲索引
        const ni = nextIndex();
        // 如果下一曲索引为null（顺序播放且已到最后一首），只更新播放图标
        if (ni === null) { updatePlayIcon(); return; }
        // 加载并播放下一曲
        loadTrack(ni, true);
    }

    // 绑定音量相关事件
    function bindVolume() {
        // 音量滑块事件
        if (volumeSlider) {
            volumeSlider.addEventListener('input', e => {
                // 设置音量（滑块值范围0-100，转换为0-1）
                audio.volume = Number(e.target.value) / 100;
                audio.muted = false;
                // 更新音量图标
                updateVolumeIcon();
            });
            // 设置默认音量为80%
            volumeSlider.value = 80;
            audio.volume = 0.8;
        }
        // 静音按钮事件
        if (muteBtn) {
            muteBtn.addEventListener('click', () => {
                // 切换静音状态
                audio.muted = !audio.muted;
                updateVolumeIcon();
            });
        }
    }

    // 绑定播放速度相关事件
    function bindSpeed() {
        if (!speedSelect) return;
        // 应用播放速度的函数
        const applyRate = rate => { audio.playbackRate = rate; };
        // 速度选择器值改变事件
        speedSelect.addEventListener('change', e => {
            const rate = Number(e.target.value) || 1;
            applyRate(rate);
        });
        // 初始时应用选择器的当前值
        applyRate(Number(speedSelect.value) || 1);
    }

    // 更新音量图标显示
    function updateVolumeIcon() {
        if (!muteBtn) return;
        const ic = muteBtn.querySelector('i');
        if (!ic) return;
        // 根据音量状态设置对应的图标
        if (audio.muted || audio.volume === 0) { ic.className = 'fa fa-volume-off'; }
        else if (audio.volume <= 0.5) { ic.className = 'fa fa-volume-down'; }
        else { ic.className = 'fa fa-volume-up'; }
        // 同步音量滑块位置
        if (volumeSlider && !audio.muted) { volumeSlider.value = Math.round(audio.volume * 100); }
    }

    // 构建播放列表DOM
    function buildPlaylist() {
        if (!playlistList) return;
        // 清空现有列表
        playlistList.innerHTML = '';
        // 遍历所有曲目
        tracks.forEach((t, idx) => {
            // 创建列表项
            const li = document.createElement('li');
            li.className = 'playlist-item';
            // 存储索引
            li.dataset.index = idx;
            // 设置HTML内容
            li.innerHTML = `<div class="playlist-title-text">${t.title || t.id}</div><div class="playlist-artist">${t.artist || ''}</div>`;
            // 点击事件：播放该曲目并关闭播放列表
            li.addEventListener('click', () => { loadTrack(idx, true); togglePlaylist(false); });
            // 添加到列表
            playlistList.appendChild(li);
        });
    }

    // 切换播放列表显示/隐藏
    function togglePlaylist(show) {
        if (!playlistPanel) return;
        // 如果传入了布尔值，使用传入的值，否则切换显示状态
        const willShow = (typeof show === 'boolean') ? show : playlistPanel.hasAttribute('hidden');
        if (willShow) playlistPanel.removeAttribute('hidden');
        else playlistPanel.setAttribute('hidden', '');
    }

    // 高亮播放列表中当前播放的曲目
    function highlightPlaylist() {
        if (!playlistList) return;
        // 遍历所有列表项，为当前播放的项添加active类
        [...playlistList.children].forEach((li, idx) => {
            li.classList.toggle('active', idx === cur);
        });
    }

    // 循环切换播放模式
    function cycleRepeatMode() {
        // 获取当前模式在数组中的索引
        const idx = playModes.indexOf(repeatMode);
        // 切换到下一个模式（循环）
        repeatMode = playModes[(idx + 1) % playModes.length];
        // 设置音频循环状态
        audio.loop = (repeatMode === 'one');
        // 更新图标
        updateRepeatIcon();
    }

    // 计算下一曲索引
    function nextIndex() {
        // 随机播放模式
        if (isShuffle) {
            let n = cur;
            while (n === cur && tracks.length > 1) { n = Math.floor(Math.random() * tracks.length); }
            return n;
        }
        // 顺序播放模式且当前是最后一首时，返回null表示停止
        if (repeatMode === 'order' && cur === tracks.length - 1) {
            return null; // 在末尾停止
        }
        // 其他模式正常循环
        return (cur + 1) % tracks.length;
    }

    // 计算上一曲索引
    function prevIndex() {
        // 随机播放模式
        if (isShuffle) {
            let n = cur;
            while (n === cur && tracks.length > 1) { n = Math.floor(Math.random() * tracks.length); }
            return n;
        }
        // 顺序播放模式且当前是第一首时，停留在第一首
        if (repeatMode === 'order' && cur === 0) { return 0; }
        // 其他模式正常循环
        return (cur - 1 + tracks.length) % tracks.length;
    }

    // 绑定歌词工具相关事件
    function bindLyricsTools() {
        // 歌词跟随复选框
        if (lyricsFollowChk) {
            // 初始化跟随状态
            let isLyricsFollow = !!lyricsFollowChk.checked;
            // 状态改变事件
            lyricsFollowChk.addEventListener('change', () => {
                isLyricsFollow = !!lyricsFollowChk.checked;
            });
        }
    }

    // 初始化函数，绑定所有事件并设置初始状态
    function init() {
        // 绑定进度条事件
        bindSeek();
        // 绑定音频时间更新事件
        audio.addEventListener('timeupdate', onTime);
        // 绑定音频播放结束事件
        audio.addEventListener('ended', onEnded);
        // 绑定播放/暂停按钮事件
        if (btnPlay) btnPlay.addEventListener('click', playPause);
        // 绑定下一首按钮事件
        if (btnNext) btnNext.addEventListener('click', () => loadTrack(nextIndex(), true));
        // 绑定上一首按钮事件
        if (btnPrev) btnPrev.addEventListener('click', () => loadTrack(prevIndex(), true));
        // 绑定随机播放按钮事件
        if (btnShuffle) btnShuffle.addEventListener('click', () => { isShuffle = !isShuffle; updateShuffleIcon(); });
        // 绑定循环模式按钮事件
        if (btnRepeat) btnRepeat.addEventListener('click', cycleRepeatMode);
        // 绑定播放列表按钮事件
        if (btnPlaylist) btnPlaylist.addEventListener('click', () => togglePlaylist());
        // 绑定播放列表关闭按钮事件
        if (playlistClose) playlistClose.addEventListener('click', (e) => { e.stopPropagation(); togglePlaylist(false); });
        // 为播放列表面板添加事件委托，处理所有关闭按钮
        if (playlistPanel) playlistPanel.addEventListener('click', (e) => {
            if (e.target && e.target.classList && e.target.classList.contains('playlist-close')) {
                e.stopPropagation(); togglePlaylist(false);
            }
        });
        // 绑定音量控制
        bindVolume();
        // 绑定播放速度控制
        bindSpeed();
        // 绑定歌词工具
        bindLyricsTools();
        // 绑定播放/暂停事件来更新图标
        audio.addEventListener('play', updatePlayIcon);
        audio.addEventListener('pause', updatePlayIcon);
        // 构建播放列表
        buildPlaylist();
        // 加载第一首曲目（不自动播放）
        loadTrack(0, false);
        // 更新图标状态
        updateShuffleIcon();
        updateRepeatIcon();
        updateVolumeIcon();
    }

    // 执行初始化函数
    init();
})();
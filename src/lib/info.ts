import {readable} from 'svelte/store';

const information_json = {
    zh: {
        member_names: {
            1: "白維田",
            2: "蒲欣妤",
            3: "許睿智",
            4: "朱紹筠",
            5: "吳黛葳",
            6: "張珈瑄",
            7: "高哲淯",
            8: "蔡尚騰",
            10: "翁國愷",
            14: "李頡",
            15: "余宗霖",
            16: "蔡政澔",
            17: "唐昱翔",
            18: "潘玟瑜",
            19: "廖婉淩",
            20: "江愷希",
            21: "莊恩齊",
            22: "陳政維",
            23: "吳佩純",
            25: "陳妍姍",
            26: "林琮澔",
            27: "陳誌陽",
            29: "簡祐呈",
            30: "林慧儒",
            31: "徐浩瀚",
            32: "邱傑義",
            33: "韓承芯",
            34: "劉吉榮",
            35: "楊茗柯",
            36: "胡品孜",
            37: "李士朋",
            38: "王嘉郁",
            39: "丁常恩",
            40: "王暉蒽",
            42: "朱亦萱",
            58: "蘇乃俞",
            59: "林珈誼",
            60: "周詩涵",
        },
        art_teams: [
            {
                id: 0,
                members: [
                    {
                        id: 21,
                        title: "組長",
                    },
                    {
                        id: 22,
                        title: "3D 建模、動畫設計",
                    },
                    {
                        id: 32,
                        title: "網頁程式設計",
                    },
                    {
                        id: 34,
                        title: "3D 互動設計",
                    }
                ],
                title: "弗朗提爾貳號",
                format: "網路程式運算影像",
                description: `
                    21世紀以降，互聯網已然發展成與現實相互糾纏的鏡像世界，使用介面的演進，大大加速了這一進程，<!--
                    -->太空殖民的時代尚未到來，互聯網可能先一步成為近未來的殖民地。<!--
                    -->本作接續其前作 FRONTIER_01，以不同比例的手機頻幕，播放三個月展期以來所累積的數千筆，觀眾所提供的圖文資料，<!--
                    -->並使用這些資料建設一座龐雜卻有序的環形太空站。<!--
                    -->身處世界各地的人們，不約而同地透過某種介面登上了這座太空站，共構出現今的互聯網生態，持續開拓 The Next Frontier。
                `,
                media: "膠合玻璃, 電子材料, 彩色有聲, 18'00\", 彩⾊/有聲, 2023",
                size: "200cm x 200cm x 200cm",
                record: {
                    images: [2, 17],
                    videos: {
                        youtube: "dQw4w9WgXcQ"
                    },
                }
            },
            {
                id: 1,
                members: [
                    {
                        id: 40,
                        title: "",
                    },
                    {
                        id: 31,
                        title: "",
                    },
                    {
                        id: 42,
                        title: "",
                    },
                    {
                        id: 2,
                        title: "",
                    },
                    {
                        id: 17,
                        title: "",
                    },
                    {
                        id: 8,
                        title: "",
                    }
                ],
                title: "野視",
                format: "",
                description: `
                    《野視》分為三個部分。在一、二部分時，主客體身份的轉換，藉由主動權的轉移，在作品第三部分進一步提問：主客體是否對等。<!--
                    -->以往，作品常被視為觀看的客體，觀眾主要使用視覺去體驗展覽而忽略了身體存在於展覽當中。<!--
                    -->當觀眾與作品互動結束後，其視覺、身體經驗與作品已索然無關。<!--
                    -->而《野視》希望再現並強調觀眾被忽視的身體經驗，藉由感測器的捕捉，將觀眾轉化成作品的一部分。<!--
                    -->主客體身份的轉換，使得觀眾重新思考觀看的意涵，並藉此推演觀眾與作品的角色定位並非二元的存在，而是如同光譜般瞬息萬變。
                `,
                media: "影像互動裝置",
                size: "", record: {
                    images: [5, 0],
                    videos: {}
                }
            },
            {
                id: 2,
                members: [
                    {
                        id: 36,
                        title: "",
                    },
                    {
                        id: 19,
                        title: "",
                    },
                    {
                        id: 1,
                        title: "",
                    },
                    {
                        id: 23,
                        title: "",
                    },
                    {
                        id: 5,
                        title: "",
                    }
                ],
                title: "在高塔上做著白日夢",
                format: "影像裝置",
                description: `
                    以塔作為載體，將幻想中的世界劃分為數個敘事空間，融合現實與虛構的影像，探索虛構世界的同時，影像作為思考節點，<!--
                    -->使觀者意識到世界中的矛盾與真實， 並討論對此種狀態的質疑與反思。
                `,
                media: "",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 3,
                members: [
                    {
                        id: 35,
                        title: "",
                    },
                    {
                        id: 14,
                        title: "",
                    },
                    {
                        id: 59,
                        title: "",
                    },
                    {
                        id: 37,
                        title: "",
                    },
                    {
                        id: 33,
                        title: "",
                    },
                    {
                        id: 30,
                        title: "",
                    }
                ],
                title: "!Virtual",
                format: "虛擬實境互動遊戲",
                description: `
                    認知的交流時常發生於群體之間，兩人、社會到國家存在著無形的網狀溝通系統，<!--
                    -->因此日常談話、爭執、情感...甚至宗教信仰、政治發展中，認知皆不斷磨合、重組產生新的面貌。<br><br><!--
                    -->近年NFT、元宇宙、ChatGPT…等新型態科技的出現，將人類帶往下一段未知的生存環境，<!--
                    -->而「真實與虛擬」的定義也逐漸轉變成混沌或漂浮的狀態。以人類的視角而言「虛擬」是被創造的產物，<!--
                    -->理由即是人類擁有解釋虛擬世界中所有變數的能力，因此能夠定義它為虛擬，反觀人類世界若不是由他人所造，<!--
                    -->同理我們應當能夠解釋眼前世界的全貌，並且存在著標準答案，眾人對於世界的想像也必須相同，<!--
                    -->然而事實上人類發展出多種對於真實的定義，如今各種宗教信仰與科學家之間產生的爭執，<!--
                    -->反向體現出我們無法斷定身處的世界及是「絕對真實」，只能說明人類試圖為眼前的世界尋找真理。<br><br><!--
                    -->假設人類世界的真實性是一個混沌、無法定義的狀態，身為創作者又是基於甚麼立場去談論「虛擬」，<!--
                    -->VR技術作為虛擬的代表物，而創作者失去絕對真實的立場製作一款虛擬實境遊戲時，玩家又該如何理解眼前的影像世界，<!--
                    -->然而同時間每位玩家於相同影像空間中，卻獲得不同資訊時，玩家們之間又該如何磨合與重組出影像世界的真理，<!--
                    -->如同人類世界對於真實性的討論般，既是統一又是分歧。<br><br><!--
                    -->此次創作不以虛實的角度去看待AR、VR、MR、XR等實境技術，<!--
                    -->試圖以皆實或皆虛的狀態去設計一套具有高度互動性的體感遊戲，從遊戲機制、影像視覺到互動技術的應用，<!--
                    -->皆遵守著多方資訊平衡與對等的邏輯去設計與製作，嘗試刺激玩家思考或定義何謂「主觀真實」。
                `,
                media: "",
                size: "", record: {
                    images: [5, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 4,
                members: [
                    {
                        id: 7,
                        title: "",
                    },
                    {
                        id: 29,
                        title: "",
                    },
                    {
                        id: 58,
                        title: "",
                    }
                ],
                title: "BizarreParadoxcallyMargin",
                format: "單頻道錄像",
                description: `
                    當今動畫技術中常以完全自動化的動態捕捉（motion capture）、後加人為逐幀編輯關鍵幀（keyframe）製成實體轉為虛擬的數位影像。<!--
                    -->使用動態捕捉的技術時，電腦依據標籤判別人類的動態並建立數位技術下「人類身體」的影像；<!--
                    -->為使影像更趨近於真實樣貌，人類再逐幀編輯關鍵幀（keyframe）重複塑形「人類身體」。<br><br><!--
                    -->本作以此技術創造上所描述的「人類身體」（魁儡），文本內容透過劇情敘事和魁儡的自述解構人與電腦因「生成人類的方法」邏輯迥異進而產生的落差，<!--
                    -->同時經由一系列與魁儡的對話回應人類與數位科技相處的現狀。
                `,
                media: "彩色/有聲 2023（影片長度後期補上）",
                size: "",
                record: {
                    images: [4, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 5,
                members: [
                    {
                        id: 27,
                        title: "",
                    },
                    {
                        id: 25,
                        title: "",
                    },
                    {
                        id: 20,
                        title: "",
                    },
                    {
                        id: 6,
                        title: "",
                    },
                ],
                title: "夢尼瑪",
                format: "影像裝置",
                description: `
                    夢尼瑪 Monema，挪用自電影詞彙Cinema 。意在製作一種以敘夢為目的，不同於傳統錄像之影像敘事工具的敘夢影像、空間與邏輯。<br><br><!--
                    -->夢組以往的創作，多時會擬定某個夢境的瞬間或框架：一個夢的敘事容器，<!--
                    -->再將創作期間成員彼此的夢境加入容器中，並以拼貼的方式重塑聲響、文字與影像內容；<!--
                    -->考慮到語言框架對於各自夢境的侷限，因此在統整夢境文字時，以意識流並集體同時書寫的方式，製作突破語言敘事的慣性與限制，<!--
                    -->並以成員的夢境為資料庫，生成集體夢境。<br><br>而本次的作品為類劇場的影像裝置，觀眾需於軌道上自行控制前後，並觀看異空間般的夢境，<!--
                    -->可以單向由起點至終點的觀看，也可以再次回到原點，如夢境般無固定邏輯；作品與展場的空間斷裂感，<!--
                    -->作為分隔夢境與現實的介面，觀眾成為夢境的參與者，以實體的肉身來體驗趨向虛擬的夢境空間，以達到超越傳統敘事影像的敘夢。
                `,
                media: "視場地而定, 2023",
                size: "", record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 6,
                members: [
                    {
                        id: 4,
                        title: "組長",
                    },
                    {
                        id: 38,
                        title: "",
                    },
                    {
                        id: 10,
                        title: "",
                    }
                ],
                title: "空＿集合",
                format: "聲音裝置",
                description: `
                    作品中，透過18個喇叭作為各自獨立的發聲體(speaker)，在過程中成為空間裡的某個物件，帶著不同的聲音扮演好自己的角色。<!--
                    -->雖然帶著各自的個體差異，但卻也是在這樣的關係中，個體之間彼此溝通 、各司其職，努力形塑出一個更完整的聲場。<br><br><!--
                    -->回應到過去生命經驗中，與其他個體間的碰撞，儘管時常感到不對頻或難以共鳴，卻也是這樣的彼此互補成一個整體。<br><br><!--
                    -->個體間的差異與多樣性使彼此補齊彼此的缺陷，這也是在創作過程中慢慢體察而來，<!--
                    -->也期許觀眾站在我們這個後知後覺的產物-即作品本身之後-能夠帶著各自的延伸與啟發回到各自的日常中，或許能在生命中激起某些漣漪與迴盪。
                `,
                media: "",
                size: "", record: {
                    images: [6, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 7,
                members: [
                    {
                        id: 39,
                        title: "",
                    },
                    {
                        id: 16,
                        title: "",
                    }
                ],
                title: "燈火闌珊處",
                format: "影像裝置",
                description: `
                    日常中感應器的應用不勝枚舉，其中感光用途的「光敏電阻」被使用廣泛。<!--
                    -->當感光的感應器與燈具形成迴路，並透過「無光送電、發光阻電」，一來一往則形成相互抗衡甚至抵觸的微妙悖論。<br><br><!--
                    -->作品關注「光、感應與迴路」所產生的相互連動與牽制關係，<!--
                    -->當自動感測成為常態，元件及個體、系統與結構之間如何構成相互辯證的關係。<!--
                    -->延伸至日常切面與生命經驗的痕跡，嘗試尋找認知中矛盾與悖論的節點，建構一種物理上的交鋒，書寫一種感知與經驗的共鳴。<br><br><!--
                    -->光線灑下，或和緩或劇烈的映入眼簾，感知的步伐總是後知後覺 ——— 原來，已是燈火闌珊。
                `,
                media: "雙頻道錄像、燈泡、光敏電阻、聚光燈、壓克力、鋁擠型",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 8,
                members: [
                    {
                        id: 60,
                        title: "",
                    }
                ],
                title: "◯",
                format: "單頻道動畫影像",
                description: `
                    靈魂，如同經過時間沖刷後，各種經驗施予壓力堆加壓縮，而一層層留下的化石痕跡。<br><br><!--
                    -->靈魂的輪廓會是什麼樣子呢？又是什麼鑄刻造就靈魂的形狀的?<br><br><!--
                    -->軀殼死亡後，最終靈魂又會歸去何方呢？<br><br><!--
                    -->死亡離我們是如此的接近又遙遠。<br><br><!--
                    -->而在安穩的日常中，<br><br><!--
                    -->偶爾腦中突然冒出的小聲音，<br><br><!--
                    -->產生對於無常以及自身本質無意義的恐慌、失落。<br><br><!--
                    -->對於生死的想像，每個文化都有不同的詮釋，<br><br><!--
                    -->但同時在這些差異之中，卻又有許多相似的描述。<br><br><!--
                    -->這件作品，融合了各個文化中，對於死後世界想像的相似之處，<br><br><!--
                    -->也展現了藝術家對於生、死以及靈魂本質的個人獨特想像。<br><br><!--
                    -->希望觀眾能在觀賞作品、在自己的聯想中優游的同時，<br><br><!--
                    -->還能從作品之中獲得心靈上一絲絲安穩、和平的寧靜。<br><br><!--
                    -->而作品名稱由符號◯來表達的理由，是希望能夠跨越各語言之間，<br><br><!--
                    -->直接以最直覺、最單純的視覺符號來表示。<br><br><!--
                    -->但想要如何用文字、語言來稱呼這件作品，完全取決於觀者，是自由憑人想像的。
                `,
                media: "",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 9,
                members: [
                    {
                        id: 15,
                        title: "",
                    }
                ],
                title: "回音",
                format: "沈浸式表演、空間裝置",
                description: `
                    作品源於藝術家的生命經驗，自去年底經歷完與他人的溝通不良後，他將平時說話的對象轉為紙本，試著開始與自己對話，<!--
                    -->這段時間他發現，書寫可以成為他孤單時的夥伴，陪伴著他面對孤獨，也可以協助他，在聽和理解訊息時，整理不清楚訊息背後所傳達意思的問題。<br><br><!--
                    -->藝術家在想，如果書寫是一段聽與寫的複製關係，那麼能否將這段過程，擴展成兩人之間的對話體驗，<!--
                    -->因此他建立一場由書寫結合電視、聲音的對話系統，邀請觀眾進入展間，透過紙本書寫、電視和口說，與藝術家體驗一場看不見對方的對話。 <br><br><!--
                    -->當溝通時，文字被留在畫面上被說話者看見，能否讓說話者了解自己傳達的訊息，在他人腦海中是如何組織，<!--
                    -->以此覺察訊息傳達是否一致，作品藉由觀眾與藝術家的「溝通」，強調對話時，理解訊息的重要性，以及透過多元的視角，回看一場對話，無法順利溝通的原因。
                `,
                media: "電視、混音器、蜂鳴片、音響、紙本、鋼筆、紗幕、檯燈、傢俱",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 10,
                members: [
                    {
                        id: 3,
                        title: "",
                    }
                ],
                title: "死循環",
                format: "VR 單人/多人，闖關遊戲",
                description: `
                    此作品為一個虛擬實境闖關遊戲，並用作品提供的特製遙控器來進行操控遊玩。<br><br><!--
                    -->玩家需要在有限時間內完成一系列的步驟得以完成關卡、獲得積分並前往下一關。<!--
                    -->透過累積積分玩家將逐步豐富這個世界，並可以在完成每個關卡後環景探索這個虛擬世界，<!--
                    -->同時回顧自己破關的行進過程，亦可以選擇跳過完成不了的關卡，此行為將會影響到遊戲之後的進程。<br><br><!--
                    -->遊戲主要故事背景：<br><br><!--
                    -->已經過了好久沒再做過這同一場夢。當時還重複做著夢，夢中的我總是看不慣自己用笑容再會重複認識的新朋友，<!--
                    -->直到我做出了那種選擇……如今的夢都顯得越發不真實，我也越來越難以找到我原來所屬的世界。<br><br><!--
                    -->墜落、失重感……才從睡夢中清醒的我睜開雙眼，洗漱、著衣、昨日的記憶，眼前的一切看似是有在移動，<!--
                    -->但觸感明顯地告訴我，其實每一天壓在身上的烙印，那位置從沒改變過。<!--
                    -->如同太陽東昇西落、狗追自己的尾巴，曬傷了、咬疼了，日復一日、一切的一切，那都只不過是循環撥放罷了。<br><br>
                `,
                media: "自製遙控裝置",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 11,
                members: [
                    {
                        id: 18,
                        title: "",
                    }
                ],
                title: "Finding",
                format: "單頻道影像/遊戲/彩色/有聲",
                description: `
                    在這片資訊色彩過量的時代，我們迷失了自己的聲音<br><br><!--
                    -->因重量的大眾色彩中產生了視覺暫留，我們的思考也逐漸被覆蓋<br><br><!--
                    -->來到這裡，從一片白色中重新出發，試著閉上眼，想像另一種色彩<br><br><!--
                    -->去看見自己忽略掉的部分，被掩蓋過的聲音<br><br><!--
                    -->最後留下，蛻化過後的空殼，自己的痕跡
                `,
                media: "",
                size: "", record: {
                    images: [3, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 12,
                members: [
                    {
                        id: 26,
                        title: "",
                    }
                ],
                title: "Non-stop",
                format: "",
                description: `
                    速度過快使我們無法捕捉在餘光之間錯過的畫面，又或者把狗貓錯看成塑膠袋。<!--
                    -->速度使物件形成現狀變成圖形，破碎的片段在之後的某一刻又拼湊起來。<!--
                    -->發展快速的生活中我們無法停下，也無法記得每分每秒錯漏的畫面，<!--
                    -->然而形成了一種方向和夾角，而只有在短暫停留的回溯今早交會的人群、昨晚過時的資訊、前天市場的叫賣聲。<!--
                    -->重組後產生新的片段，但並不真實，表現繁忙的生活中無法逃脫與踏實生活的感受。 <!--
                -->`,
                media: "雙頻道錄像/彩色/有聲",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            }
        ],
        admins: [
            {
                id: 0,
                department: "總召",
                members: [
                    {
                        id: 31,
                        title: "總召",
                    },
                    {
                        id: 38,
                        title: "副總召",
                    }
                ]
            },
            {
                id: 1,
                department: "文書",
                members: [
                    {
                        id: 17,
                        title: "文書",
                    },
                    {
                        id: 1,
                        title: "文書",
                    }
                ]
            },
            {
                id: 2,
                department: "總務",
                members: [
                    {
                        id: 33,
                        title: "總務",
                    }
                ]
            },
            {
                id: 3,
                department: "翻譯",
                members: [
                    {
                        id: 59,
                        title: "組長",
                    },
                    {
                        id: 34,
                        title: "組員",
                    }
                ]
            },
            {
                id: 4,
                department: "視覺組",
                members: [
                    {
                        id: 10,
                        title: "組長",
                    },
                    {
                        id: 29,
                        title: "影片",
                    },
                    {
                        id: 22,
                        title: "影片",
                    },
                    {
                        id: 16,
                        title: "文宣",
                    },
                    {
                        id: 23,
                        title: "文宣",
                    },
                    {
                        id: 36,
                        title: "文宣",
                    },
                    {
                        id: 19,
                        title: "商品",
                    },
                    {
                        id: 60,
                        title: "商品",
                    }
                ]
            },
            {
                id: 5,
                department: "公關組",
                members: [
                    {
                        id: 25,
                        title: "組長",
                    },
                    {
                        id: 30,
                        title: "贊助",
                    },
                    {
                        id: 35,
                        title: "贊助",
                    },
                    {
                        id: 37,
                        title: "廣告",
                    },
                    {
                        id: 15,
                        title: "廣告",
                    },
                    {
                        id: 40,
                        title: "廣告",
                    }
                ]
            },
            {
                id: 6,
                department: "活動組",
                members: [
                    {
                        id: 27,
                        title: "組長",
                    },
                    {
                        id: 20,
                        title: "企劃",
                    },
                    {
                        id: 6,
                        title: "企劃",
                    },
                    {
                        id: 39,
                        title: "組員",
                    }
                ]
            },
            {
                id: 7,
                department: "佈展組",
                members: [
                    {
                        id: 14,
                        title: "組長",
                    },
                    {
                        id: 7,
                        title: "組員",
                    },
                    {
                        id: 2,
                        title: "組員",
                    },
                    {
                        id: 5,
                        title: "組員",
                    },
                    {
                        id: 4,
                        title: "組員",
                    },
                    {
                        id: 32,
                        title: "組員",
                    }
                ]
            },
            {
                id: 8,
                department: "事務組",
                members: [
                    {
                        id: 42,
                        title: "組長",
                    },
                    {
                        id: 18,
                        title: "組員",
                    },
                    {
                        id: 34,
                        title: "組員",
                    },
                    {
                        id: 8,
                        title: "機動",
                    }
                ]
            },
            {
                id: 9,
                department: "紀錄組",
                members: [
                    {
                        id: 21,
                        title: "組長",
                    },
                    {
                        id: 3,
                        title: "組員",
                    },
                    {
                        id: 26,
                        title: "組員",
                    }
                ]
            },
            {
                id: 10,
                department: "網頁組",
                members: [
                    {
                        id: 32,
                        title: "組長",
                    },
                    {
                        id: 37,
                        title: "組員",
                    },
                    {
                        id: 59,
                        title: "組員",
                    },
                    {
                        id: 34,
                        title: "組員",
                    }
                ]
            }
        ]
    },
    en: {
        member_names: {
            1: "Pi Wei Tian",
            2: "Poo Xin Yu",
            3: "Hsueh Ruei-Jhih",
            4: "Grace Chu",
            5: "Wu Dai Wei",
            6: "Chiang Jia Hsuan",
            7: "Guo Zhe Yu",
            8: "Tsai Shang-Teng",
            10: "Weng Kuo Kai",
            14: "Lee Jia",
            15: "Yu Tsung Lin",
            16: "Tsai Cheng-Hao",
            17: "Tang Yu Xiang",
            18: "Peng Wen Yu",
            19: "Liao Wan Ling",
            20: "Chiang Kai Hsi",
            21: "Chuang En Chieh",
            22: "Chen Cheng Wei",
            23: "Wu Pei Chun",
            25: "Chien Yen Sheng",
            26: "Lin Tsung Hao",
            27: "Chen Chih Yang",
            29: "Jian Yu Cheng",
            30: "Lin Hui Ru",
            31: "Hsu Hao Han",
            32: "Chiu Chieh Yi",
            33: "Han Cheng Hsin",
            34: "Liou Ji Rong",
            35: "Yang Ming Ke",
            36: "Hu Pin Zi",
            37: "Lee Shih Peng",
            38: "Wang Chia Yu",
            39: "Ding Chang En",
            40: "Wang Hui En",
            42: "Chiu Yi Hsuan",
            58: "Tzu Nai Yu",
            59: "Lin Jia Yi",
            60: "Chou Shih Han",
        },
        art_teams: [
            {
                id: 0,
                members: [
                    {
                        id: 21,
                        title: "Project Manager",
                    },
                    {
                        id: 22,
                        title: "Art Director",
                    },
                    {
                        id: 32,
                        title: "Software Engineer",
                    },
                    {
                        id: 34,
                        title: "Interactive & Creative Designer",
                    }
                ],
                title: "FRONTIER_02",
                format: "Internet-based Interactive Video Installation",
                description: `
                    21世紀以降，互聯網已然發展成與現實相互糾纏的鏡像世界，使用介面的演進，大大加速了這一進程，<!--
                    -->太空殖民的時代尚未到來，互聯網可能先一步成為近未來的殖民地。<!--
                    -->本作接續其前作 FRONTIER_01，以不同比例的手機頻幕，播放三個月展期以來所累積的數千筆，觀眾所提供的圖文資料，<!--
                    -->並使用這些資料建設一座龐雜卻有序的環形太空站。<!--
                    -->身處世界各地的人們，不約而同地透過某種介面登上了這座太空站，共構出現今的互聯網生態，持續開拓 The Next Frontier。
                `,
                media: "Glass, Electronic Materials, Color Sound, 18'00\", Color/Sound",
                size: "200cm x 200cm x 200cm",
                record: {
                    images: [2, 0],
                    videos: {
                        youtube: "91JGyan6MY8"
                    },
                }
            },
            {
                id: 1,
                members: [
                    {
                        id: 40,
                        title: "",
                    },
                    {
                        id: 31,
                        title: "",
                    },
                    {
                        id: 42,
                        title: "",
                    },
                    {
                        id: 2,
                        title: "",
                    },
                    {
                        id: 17,
                        title: "",
                    },
                    {
                        id: 8,
                        title: "",
                    }
                ],
                title: "Phantom of the Exhibition",
                format: "",
                description: `
                    "Phantom of the Exhibition" interacts with the entire exhibition space,
                     allowing viewers to break away from conventional rules and not follow a specific viewing order.
                     In the past, artworks were often seen as the main subjects of observation.
                     However, this piece aims to recreate the overlooked bodily experiences of the viewers
                     by capturing their movements through sensors and transforming them into a part of the artwork.
                     The inversion of the viewing subject's behavior forces the audience to reconsider their relationship with the exhibition space and,
                     in doing so, reevaluate the definition of the term "audience"—as an intangible presence.
                     The meaning of the audience has already been subverted,
                     and this series of works attempts to encourage viewers to rethink the implications of "audience to audience".
                `,
                media: "Video Interactive Installation",
                size: "", record: {
                    images: [5, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 2,
                members: [
                    {
                        id: 36,
                        title: "",
                    },
                    {
                        id: 19,
                        title: "",
                    },
                    {
                        id: 1,
                        title: "",
                    },
                    {
                        id: 23,
                        title: "",
                    },
                    {
                        id: 5,
                        title: "",
                    }
                ],
                title: "在高塔上做著白日夢",
                format: "Video Installation",
                description: `
                    Utilizing the tower as a vessel, the imagined world is divided into several narrative spaces,
                    merging real and fictional imagery.
                    As we explore the fabricated realm, images serve as nodes of contemplation,
                    enabling viewers to perceive the contradictions and truths within the world,
                    while inviting discussions on questioning and reflecting upon this state.
                `,
                media: "",
                size: "", record: {
                    images: [4, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 3,
                members: [
                    {
                        id: 35,
                        title: "",
                    },
                    {
                        id: 14,
                        title: "",
                    },
                    {
                        id: 59,
                        title: "",
                    },
                    {
                        id: 37,
                        title: "",
                    },
                    {
                        id: 33,
                        title: "",
                    },
                    {
                        id: 30,
                        title: "",
                    }
                ],
                title: "!Virtual",
                format: "VR Game",
                description: `
                    Cognitive exchange often occurs within groups, with an intangible network of communication systems existing between individuals,
                    societies, and nations. Consequently, daily conversations, disputes, emotions,
                    and even religious beliefs and political developments continuously grind and reassemble to form new appearances.<br><br>
                    In recent years, the emergence of novel technologies such as NFTs, the metaverse,
                    and ChatGPT has ushered humanity into an unknown realm of existence,
                    transforming the definition of "real and virtual" into a chaotic or fluid state.
                    From a human perspective, the "virtual" is a created product,
                    as humans possess the ability to interpret all variables within the virtual world, allowing us to define it as virtual.
                    Conversely, if the human world is not created by others,
                    by the same logic, we should be able to explain the entirety of the world before us and have a standard answer.
                    Everyone's imagination of the world must be identical;
                    however, the development of various definitions of reality and ongoing disputes between religious beliefs 
                    and scientists indicate that we cannot determine whether the world we inhabit is "absolutely real."
                    Instead, it demonstrates humanity's quest for truth in the world before us.<br><br>
                    Assuming the authenticity of the human world is chaotic and indefinable, what basis do creators have for discussing "virtual" realities?
                    As VR technology represents the virtual,
                    how should players interpret the visual world before them when a creator loses their position of absolute reality while creating a virtual reality game? Simultaneously,
                    as each player acquires different information within the same visual space,
                    how can they harmonize and reassemble the truth of the visual world, much like the human world's discussion of authenticity,
                    which is both unified and divergent?<br><br>
                    This work does not approach AR, VR, MR, and XR technologies from the perspective of virtual versus real.
                    Instead, it attempts to design a highly interactive motion-sensing game in a state that is either entirely real or entirely virtual. The game mechanics,
                    visual imagery, and application of interactive technology all adhere to a logic of balancing and equating multifaceted information for design and production.
                    This aims to stimulate players to contemplate or define what constitutes "subjective reality."
                `,
                media: "",
                size: "", record: {
                    images: [5, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 4,
                members: [
                    {
                        id: 7,
                        title: "",
                    },
                    {
                        id: 29,
                        title: "",
                    },
                    {
                        id: 58,
                        title: "",
                    }
                ],
                title: "BizarreParadoxcallyMargin",
                format: "單頻道錄像",
                description: `
                    In today's world, the transformation of bodily movements into virtual models often employs fully automated "posture recognition" techniques to generate images. During this process, computers utilize algorithms and calculations to construct visuals, resulting in an inability to perfectly capture the real-world dynamics of the human body.<br><br>
                    This work explores such technology, initially capturing the human body through physical recordings, then reconstructing the images through computer recognition, and finally reshaping the body's movements a second time. It creates a digital puppet, transitioning from the physical realm to the virtual one, deconstructed and reassembled by the computer. By incorporating narratives and dialogues with the puppet, the piece highlights the inherent differences between computers and humans in understanding "physicality, appearance, and corporeality." Can computers replace the unique attributes and emotional empathy possessed solely by humans? How do humans navigate their daily lives alongside digital technology as the line between reality and the virtual world becomes increasingly blurred?
                `,
                media: "Color/Sound",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 5,
                members: [
                    {
                        id: 27,
                        title: "",
                    },
                    {
                        id: 25,
                        title: "",
                    },
                    {
                        id: 20,
                        title: "",
                    },
                    {
                        id: 6,
                        title: "",
                    },
                ],
                title: "Monema",
                format: "Video Installation",
                description: `
                    "Monema" is derived from the film term "Cinema." The intention is to create a dream-narrative tool that is different from traditional video, focusing on dream narration, space, and logic.<br><br>
                    A dream narrative container is created, into which the dreams of the project's members are added. These dreams are then reshaped using a collage of sounds, text, and images. Considering the limitations of language frameworks on individual dreams, a stream-of-consciousness approach is taken to collectively write dream texts simultaneously, breaking the inertia and constraints of language narration. The dreams of the members serve as a database, generating a collective dream.<br><br>
                    In this work, a quasi-theatrical video installation is presented. The audience must control their movement along a track while watching a dream-like, otherworldly space. They can view the dream from start to finish in one direction or return to the starting point, reflecting the fluid logic of dreams. The sense of spatial rupture between the artwork and the exhibition space acts as an interface separating dreams from reality. The audience becomes a participant in the dream, experiencing the virtual dream space through their physical presence, transcending traditional narrative imagery in dream narration.
                `,
                media: "Designated by the exhibition space",
                size: "", record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 6,
                members: [
                    {
                        id: 4,
                        title: "Team Leader",
                    },
                    {
                        id: 38,
                        title: "",
                    },
                    {
                        id: 10,
                        title: "",
                    }
                ],
                title: "Vac-sound Set",
                format: "Audio Installation",
                description: `
                    In the artwork, 18 speakers serve as independent sound-emitting bodies, becoming objects within the space,
                    each carrying a distinct voice and playing its designated role. Despite their individual differences,
                    they communicate and collaborate within this relationship, striving to shape a more complete soundscape.
                    This reflects past life experiences and collisions with other individuals.
                    Though often feeling out of sync or unable to resonate, such interactions complete each other as a whole.<br><br>
                    The differences and diversity among individuals help to compensate for each other's shortcomings,
                    a realization gradually acknowledged during the creative process. It is hoped that the audience,
                    standing behind our belatedly aware creation – the artwork itself – will carry their extensions and inspirations back to their daily lives,
                    perhaps igniting ripples and reverberations in their existence.
                `,
                media: "",
                size: "", record: {
                    images: [6, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 7,
                members: [
                    {
                        id: 39,
                        title: "",
                    },
                    {
                        id: 16,
                        title: "",
                    }
                ],
                title: "燈火闌珊處",
                format: "Video Installation",
                description: `
                    In daily life, the applications of sensors are innumerable, with photo-resistors being widely used for sensing light.
                    When a light-sensitive sensor forms a circuit with a light fixture, the "no light allows electricity,
                    light emission resists electricity" interaction creates a subtle paradox of mutual opposition and even resistance.<br><br>
                    The artwork focuses on the interlocking and restraining relationships produced by "light, sensing, and circuitry,"
                    and explores how components and individuals, systems,
                    and structures form dialectical relationships when automatic sensing becomes the norm.
                    Extending to the traces of daily life and life experiences, the work attempts to locate the nodes of contradictions and paradoxes within cognition,
                    constructing a physical confrontation and writing a resonance of perception and experience.<br><br>
                    As the light pours down, either gently or intensely, the pace of perception is always belatedly aware – realizing,
                    in the end, that it is already at the dimly lit place.
                `,
                media: "Duo-channel video, light bulb, photo-resistor, spotlight, acrylic, aluminum extrusion",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 8,
                members: [
                    {
                        id: 60,
                        title: "",
                    }
                ],
                title: "◯",
                format: "Single Channel Animation Video",
                description: `
                    The soul, like the fossilized traces left layer by layer after being weathered by time and compressed under the weight of various experiences.<br><br>
                    What would the contour of the soul look like? And what shapes the soul's form?Allowing the soul to escape from the human body, returning to its essence to experience the world of flora and fauna, what kind of scene would that be?<br><br>
                    After the body perishes, where will the soul ultimately return?
                `,
                media: "",
                size: "", record: {
                    images: [4, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 9,
                members: [
                    {
                        id: 15,
                        title: "",
                    }
                ],
                title: "回音",
                format: "Immersive Performance, Space Installation",
                description: `
                    The artwork is inspired by the artist's life experiences. After experiencing poor communication with others at the end of last year, the artist turned to writing on paper as a way to initiate a dialogue with himself. During this time, he discovered that writing could be a companion in his loneliness, accompanying him through solitude and helping him organize and understand his personal issues.<br><br>
                    The artist wonders if, by recording words for others through writing, he can convey his message and help the other person understand what he is trying to communicate. In a space distanced from the other person, the artist uses a television screen and the sound of a pen to convey the process of writing, seeking a new form of dialogue and relationship with the other person.
                `,
                media: "Television, Mixer, Speaker, Sound System, Paper, Pen, Curtain, Table Lamp, Furniture",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 10,
                members: [
                    {
                        id: 3,
                        title: "",
                    }
                ],
                title: "Endless Loop",
                format: "VR Single/Multiplayer Adventure Game",
                description: `
                    Fed up with the constraints of time, breaking the cycle all at once, escaping the monotonous daily routine.<br><br>
                    The changes in life gradually unfold, the trends behind the trends form a context, and just before perceiving one's own awareness, the traces and trajectories of the past, present, and future are laid bare. Believing I could know the infinite, I realized one thing in an instant: the initial action to break the cycle was merely another cycle on a grander scale.<br><br>
                    A dog joyfully chasing its own tail, locked in an eternal cycle.
                `,
                media: "Self-made Remote Control Device",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            },
            {
                id: 11,
                members: [
                    {
                        id: 18,
                        title: "",
                    }
                ],
                title: "Finding",
                format: "Single Channel Video/Game/Color/With Sound",
                description: `
                    Amidst this age of information inundation, discovering our authentic inner voice proves daunting. We might feel alienated in this world, preoccupied with our looks or character. Endeavor to uncover your true essence, acknowledging the neglected aspects, the muted voices, and the overlooked hues. Ultimately, what lingers are the vestiges of our being, the hollow remnants after metamorphosis.
                `,
                media: "",
                size: "", record: {
                    images: [3, 0],
                    videos: [0, 1]
                }
            },
            {
                id: 12,
                members: [
                    {
                        id: 26,
                        title: "",
                    }
                ],
                title: "Non-stop",
                format: "",
                description: `
                    Swiftness eludes our grasp, leaving us unable to capture fleeting images or distinguish pets from plastic bags. Speed transforms objects into patterns and fragmented pieces, only to be reassembled in a later moment. Amidst the rapid pace of life, we struggle to pause or remember the disjointed scenes, yet they forge a trajectory and angle, perceivable only in brief retrospection of intersecting crowds, outdated information, or the clamor of a marketplace.<br><br>
                    Reassembled, these fragments form new sequences, though not genuine; they portray the inescapable chaos of bustling lives while yearning for a grounded existence.
                `,
                media: "Duo-channel video/Color/With Sound",
                size: "",
                record: {
                    images: [0, 1],
                    videos: [0, 1]
                }
            }
        ],
        admins: [
            {
                id: 0,
                department: "president",
                members: [
                    {
                        id: 31,
                        title: "President",
                    },
                    {
                        id: 38,
                        title: "Vice President",
                    }
                ]
            },
            {
                id: 1,
                department: "文書",
                members: [
                    {
                        id: 17,
                        title: "文書",
                    },
                    {
                        id: 1,
                        title: "文書",
                    }
                ]
            },
            {
                id: 2,
                department: "總務",
                members: [
                    {
                        id: 33,
                        title: "總務",
                    }
                ]
            },
            {
                id: 3,
                department: "翻譯",
                members: [
                    {
                        id: 59,
                        title: "組長",
                    },
                    {
                        id: 34,
                        title: "組員",
                    }
                ]
            },
            {
                id: 4,
                department: "視覺組",
                members: [
                    {
                        id: 10,
                        title: "組長",
                    },
                    {
                        id: 29,
                        title: "影片",
                    },
                    {
                        id: 22,
                        title: "影片",
                    },
                    {
                        id: 16,
                        title: "文宣",
                    },
                    {
                        id: 23,
                        title: "文宣",
                    },
                    {
                        id: 36,
                        title: "文宣",
                    },
                    {
                        id: 19,
                        title: "商品",
                    },
                    {
                        id: 60,
                        title: "商品",
                    }
                ]
            },
            {
                id: 5,
                department: "公關組",
                members: [
                    {
                        id: 25,
                        title: "組長",
                    },
                    {
                        id: 30,
                        title: "贊助",
                    },
                    {
                        id: 35,
                        title: "贊助",
                    },
                    {
                        id: 37,
                        title: "廣告",
                    },
                    {
                        id: 15,
                        title: "廣告",
                    },
                    {
                        id: 40,
                        title: "廣告",
                    }
                ]
            },
            {
                id: 6,
                department: "活動組",
                members: [
                    {
                        id: 27,
                        title: "組長",
                    },
                    {
                        id: 20,
                        title: "企劃",
                    },
                    {
                        id: 6,
                        title: "企劃",
                    },
                    {
                        id: 39,
                        title: "組員",
                    }
                ]
            },
            {
                id: 7,
                department: "佈展組",
                members: [
                    {
                        id: 14,
                        title: "組長",
                    },
                    {
                        id: 7,
                        title: "組員",
                    },
                    {
                        id: 2,
                        title: "組員",
                    },
                    {
                        id: 6,
                        title: "組員",
                    },
                    {
                        id: 4,
                        title: "組員",
                    },
                    {
                        id: 32,
                        title: "組員",
                    }
                ]
            },
            {
                id: 8,
                department: "事務組",
                members: [
                    {
                        id: 42,
                        title: "組長",
                    },
                    {
                        id: 18,
                        title: "組員",
                    },
                    {
                        id: 34,
                        title: "組員",
                    },
                    {
                        id: 8,
                        title: "機動",
                    }
                ]
            },
            {
                id: 9,
                department: "紀錄組",
                members: [
                    {
                        id: 21,
                        title: "組長",
                    },
                    {
                        id: 3,
                        title: "組員",
                    },
                    {
                        id: 26,
                        title: "組員",
                    }
                ]
            },
            {
                id: 10,
                department: "網頁組",
                members: [
                    {
                        id: 32,
                        title: "組長",
                    },
                    {
                        id: 37,
                        title: "組員",
                    },
                    {
                        id: 59,
                        title: "組員",
                    },
                    {
                        id: 34,
                        title: "組員",
                    }
                ]
            }
        ]
    }
}
export const information = readable(information_json);
// implementation goes here


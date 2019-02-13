// Most names are from VNDB
// Unconfirmed Names
// Dolores (ドロレス), Nadia (ナディア), Kisaragi (如月), Wisp (ウィスプ),
// Sedona Arstona (セドナ アルストナ), Bridgette (ブリジット), Merodo Kuroa (メロード クロア)

// gender is there in case the trap ever gets a scene and also so people can
// add reoccuring male characters if they want to.
// currently the script goes by only one character in a scene being original
// to make it filter in search so if the main character gets added to every scene
// he shows up in then even if it's a scene with a main game character it will
// still show up if searching for unique characters.

// Tags are the same as EH tags https://ehwiki.org/wiki/Fetish_Listing
// Create a new key and array as needed.
//
// tags.base will always be added to the scene so make sure they apply across
// every form, any tags that don't fit can be added to ignoredCharacterTags on
// the scene meta.
//
// Don't create a new character just because they go to the beach and get a tanlines
// instead use the form that they are and add tanlines in to scene tags
//
// Unlike some EH tags the tag does not have to be used in sex to be tagged however
// you should make sure to add the tag to ignoredCharacterTags if they aren't used.
// e.g. Saya (006) has tentacles.
// DO tag her character with tentacles BUT if in the scene the tentacles aren't
// used add them to ignoredCharacterTags.

// originalCharacter = Does the character only feature in TABA/RPGX?

/* TEMPLATE

"000":{
	"name":["", ""],
	"gender":"",
	"tags": {
		"base":[],
	},
	"originalCharacter":,
	"artist":ARTIST_ID,
},

*/

const KAGAMI_HIROTAKA_ID = ["Kagami Hirotaka", "Hirotaka Kagami", "Kagami"];
const AOI_NAGISA_ID = ["Aoi Nagisa", "Nagisa Aoi", "Aoi"];
const ZOL_ID = ["ZOL"];
const SASAYUKI_ID = ["SASAYUKi"];
const SHINDOL_ID = ["ShindoL"];
const MIKOYAN_ID = ["Mikoyan"];
const ASAHI_ID = ["Asahi"];
const HOMURA_YUNI_ID = ["Homura Yuni", "Yuni Homura", "Yuni"];
const KUUCHUU_YOUSAI_ID = ["Kuuchu Yousai", "Yousai Kuuchu", "Yousai"];
const SAKURANBO_ID = ["Sakuranbo"];
const NOBUSHITO_ID = ["Nobushito"];
const OV_ID = ["OV"];
const GARA_AYURI_ID = ["Gara Ayuri", "Ayuri Gara", "Ayuri"];
const ASAGIRI_ID = ["Asagiri"];
const OBUI_ID = ["Obui"];
const BAN_ID = ["Ban!", "Ban"];
const POTION_ID = ["Potion"];
const FEI_ID = ["Fei"];
const HIEN_ID = ["Hien"];
const SIAN_ID = ["Sian"];
const DEKOSEN_TAKUJI_ID = ["Dekosen Takuji", "Dekosen", "Takuji", "デコセン タクジ", "デコセン", "タクジ"];
const KOKONOKI_NAO_ID = ["Kokonoki Nao", "Kokonoki", "Nao", "ここのき 奈緒", "ここのき", "奈緒"]

characterMeta = {
	"001":{
		"name":["Igawa Asagi", "Asagi Igawa", "Asagi", "井河 アサギ"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
			"young":[],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"002":{
		"name":["Igawa Sakura", "Sakura Igawa", "Sakura", "井河 さくら"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["body suit"],
			"demon":["dark skin"],
			"young":[],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"003":{
		"name":["Koukawa Oboro", "Oboro Kouwaka", "Oboro", "甲河 朧"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"demon":["bodysuit"],
			"usf":["eye mask"],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"004":{
		"name":["Yatsu Murasaki", "Murasaki Yatsu", "Murasaki", "八津 紫"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
			"usf":["robot"],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"005":{
		"name":["Ingrid", "イングリッド"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "dark skin"],
			"demon":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"006":{
		"name":["Saya", "沙耶"],
		"gender":"female",
		"tags": {
			"base":["tentacles"],
			"demon":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"007":{
		"name":["Koukawa Asuka", "Asuka Koukawa", "Asuka", "甲河 アスカ"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "robot"],
			"usf":["bodysuit"]
		},
		"originalCharacter":false,
		"artist":AOI_NAGISA_ID,
	},
	"008":{
		"name":["Mizuki Yukikaze", "Yukikaze Mizuki", "Yukikaze", "水城 ゆきかぜ"],
		"gender":"female",
		"tags": {
			"base":["small breasts", "dark skin", "tan lines"],
			"taimanin":["bodysuit"],
			"demon":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":AOI_NAGISA_ID,
	},
	"009":{
		"name":["Akiyama Rinko", "Rinko Akiyama", "Rinko", "秋山 凜子"],
		"gender":"female",
		"tags": {
			"base":["huge breasts"],
			"taimanin":["bodysuit"],
			"usf":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":AOI_NAGISA_ID,
	},
	"010":{
		"name":["Mizuki Shiranui", "Shiranui Mizuki", "Shiranui", "水城 不知火"],
		"gender":"female",
		"tags": {
			"base":["huge breasts"],
			"demon":["bodysuit"]
		},
		"originalCharacter":false,
		"artist":AOI_NAGISA_ID,
	},
	"011":{
		"name":["Kousaka Shizuru", "Shizuru Kousaka", "Shizuru", "高坂 静流"],
		"gender":"female",
		"tags": {
			"base":["huge breasts", "glasses"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":AOI_NAGISA_ID,
	},
	"012":{
		"name":["Shinganji Kurenai", "Kurenai Shinganji", "Kurenai", "心願寺 紅"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":ZOL_ID,
	},
	"013":{
		"name":["Makishima Ayame", "Ayame Makishima", "Ayame", "槇島 あやめ"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":false,
		"artist":ZOL_ID,
	},
	"014":{
		"name":["Felicia", "フエリシア"],
		"gender":"female",
		"tags": {
			"base":["small breasts"],
			"demon":["sundress"],
		},
		"originalCharacter":false,
		"artist":ZOL_ID,
	},
	"015":{
		"name":["Lilim", "リリム"],
		"gender":"female",
		"tags": {
			"base":["small breasts", "monster", "original"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":KAGAMI_HIROTAKA_ID,
	},
	"016":{
		"name":["Nasara", "ナーサラ"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "dark skin"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":SASAYUKI_ID,
	},
	"017":{
		"name":["Alka Steel", "Steel Alka", "Steel", "アルカ スティエル"],
		"gender":"female",
		"tags": {
			"base":["muscle", "robot"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":SHINDOL_ID,
	},
	"018":{
		"name":["Cerastes", "セラステス"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "snake girl", "muscle", "eye mask", "futanari"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":MIKOYAN_ID,
	},
	"019":{
		"name":["Lilith", "リリス"],
		"gender":"female",
		"tags": {
			"base":["huge breasts", "big nipples", "witch"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":ASAHI_ID,
	},
	"020":{
		"name":["Rina", "リーナ"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "big nipples", "schoolgirl uniform"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":ASAHI_ID,
	},
	"021":{
		"name":["Minasaki", "ミナサキ"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "wings"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":HOMURA_YUNI_ID,
	},
	"022":{
		"name":["Michea Silkys", "Silkys Michea", "Michea", "ミシェア シルキース"],
		"gender":"female",
		"tags": {
			"base":["small breasts"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":KUUCHUU_YOUSAI_ID,
	},
	"023":{
		"name":["Dolores", "ドロレス"],
		"gender":"female",
		"tags": {
			"base":["small breasts"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":SAKURANBO_ID,
	},
	"024":{
		"name":["Nadia", "ナディア"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":SAKURANBO_ID,
	},
	"025":{
		"name":["Ange", "アンジェ"],
		"gender":"female",
		"tags": {
			"base":["small breasts"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"026":{
		"name":["Mirabell Bell", "Bell Mirabell", "Mirabell", "ミラベル ベル"],
		"gender":"female",
		"tags": {
			"base":["huge breasts", "big nipples", "dark skin", "muscle"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":OV_ID,
	},
	"027":{
		"name":["Ooshima Shizuku", "Shizuku Ooshima", "Shizuku", "大島 雫"],
		"gender":"female",
		"tags": {
			"base":["dark skin", "muscle"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"028":{
		"name":["Yuri Hisui", "Hisui Yuri", "Hisui", "由利 翡翠"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":GARA_AYURI_ID,
	},
	"029":{
		"name":["Gran", "グラン"],
		"gender":"female",
		"tags": {
			"base":["muscle", "monster"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":MIKOYAN_ID,
	},
	"030":{
		"name":["Kisaragi", "如月"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "big nipples", "big ass"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":ASAGIRI_ID,
	},
	"031":{
		"name":["Wisp", "ウィスプ"],
		"gender":"female",
		"tags": {
			"base":["hige breasts", "monster"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":OBUI_ID,
	},
	"032":{
		"name":["Wight", "ワイト"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "piercing"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":BAN_ID,
	},
	"033":{
		"name":["Chevalier", "シュヴァリエ"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"034":{
		"name":["Fuuma Saika", "Saika Fuuma", "Saika", "ふうま 災禍"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "robot"],
			"taimanin":["bodysuit"]
		},
		"originalCharacter":true,
		"artist":ZOL_ID,
	},
	"035":{
		"name":["Aina Winchester", "Winchester Aina", "Aina", "アイナ ウィンチェスター"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "heterochromia"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":POTION_ID,
	},
	"036":{
		"name":["Uehara Rin", "Rin Uehara", "Rin", "上原 燐"],
		"gender":"female",
		"tags": {
			"base":["huge breasts", "big ass"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":FEI_ID,
	},
	"037":{
		"name":["Shinohara Mari", "Mari Shinohara", "Mari", "篠原 まり"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "glasses"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":POTION_ID,
	},
	"038":{
		"name":["Yukina Grace", "Grace Yukina", "Grace", "雪那 グレイス"],
		"gender":"female",
		"tags": {
			"base":["huge breasts", "big ass"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":ASAGIRI_ID,
	},
	"039":{
		"name":["Sedona Arstona", "Arstona Sedona", "Arstona", "セドナ アルストナ"],
		"gender":"female",
		"tags": {
			"base":[],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":HOMURA_YUNI_ID,
	},
	"040":{
		"name":["Bridgette", "ブリジット"],
		"gender":"female",
		"tags": {
			"base":["small breasts", "fox girl"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"041":{
		"name":["Merodo Kuroa", "Kuroa Merodo", "Kuroa", "メロード クロア"],
		"gender":"female",
		"tags": {
			"base":["elf", "big breasts", "glasses"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":ZOL_ID,
	},
	"042":{
		"name":["Fuuma Amane", "Amane Fuuma", "Amane", "ふうま 天音"],
		"gender":"female",
		"tags": {
			"base":["butler", "heterochromia", "robot"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":SHINDOL_ID,
	},
	"043":{
		"name":["Kurumi S. Sakazaki", "Sakazaki S. Kurumi", "Kurumi", "クルミ S. 坂崎"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "muscle"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":HIEN_ID,
	},
	"044":{
		"name":["IO Orion", "イーオ オライオン"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "muscle", "big nipples"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":ASAGIRI_ID,
	},
	"045":{
		"name":["Yubashiri Ibuki", "Ibuki Yubashiri", "Ibuki", "弓走 颯"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":ZOL_ID,
	},
	"046":{
		"name":["Kise Hotaru", "Hotaru Kise", "Hotaru", "喜瀬 蛍"],
		"gender":"female",
		"tags": {
			"base":[],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":HOMURA_YUNI_ID,
	},
	"047":{
		"name":["Sanada Homura", "Homura Sanada", "Homura", "眞田 焔"],
		"gender":"female",
		"tags": {
			"base":[],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"048":{
		"name":["Lust", "ラスタ"],
		"gender":"female",
		"tags": {
			"base":["dark skin", "heterochromia"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":SHINDOL_ID,
	},
	"049":{
		"name":["Crackle", "クラクル"],
		"gender":"female",
		"tags": {
			"base":["catgirl", "big breasts"],
			"demon":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"050":{
		"name":["Shidou Rinka", "Rinka Shidou", "Rinka", "紫藤 凜花"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":BAN_ID,
	},
	"051":{
	"name":["Snake Lady", "スネーク レヂィ"],
	"gender":"female",
	"tags": {
		"base":["futanari", "bodysuit", "big breasts", "eye mask"],
		"demon":[],
	},
	"originalCharacter":false,
	"artist":KAGAMI_HIROTAKA_ID,
	},
	"052":{
	"name":["Cecilia Cello", "Cecilia", "セシリア チェロ"],
	"gender":"female",
	"tags": {
		"base":["huge breasts", "big nipples"],
		"usf":[],
	},
	"originalCharacter":true,
	"artist":ASAHI_ID,
	},
	"053":{
	"name":["Forcia", "フォルシア"],
	"gender":"female",
	"tags": {
		"base":["big breasts", "bodysuit"],
		"taimanin":[],
	},
	"originalCharacter":true,
	"artist":HOMURA_YUNI_ID,
	},
	"054":{
		"name":["Kanon", "カノン"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "dark skin", "wolf girl"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"055":{
		"name":["Donna Burroghs", "Donna", "ドナ バロウズ"],
		"gender":"female",
		"tags": {
			"base":["huge breasts"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":ASAHI_ID,
	},
	"056":{
		"name":["No.16 Sonia", "Sonia", "No.16", "No.16 ソニア", "ソニア"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"usf":[],
		},
		"originalCharacter":true,
		"artist":NOBUSHITO_ID,
	},
	"057":{
		"name":["Kamimura Maika", "Maika", "神村 舞華", "舞華"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":SIAN_ID,
	},
	"058":{
		"name":["Rokka", "ロッカ"],
		"gender":"female",
		"tags": {
			"base":["big breasts"],
			"usf":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":HOMURA_YUNI_ID,
	},
	"059":{
		"name":["Shiga Asatsuki", "Asatsuki", "志賀 あさつき", "あさつき"],
		"gender":"female",
		"tags": {
			"base":["big breasts", "eye mask"],
			"taimanin":["bodysuit"],
		},
		"originalCharacter":true,
		"artist":ZOL_ID,
	},
	"060":{
	"name":["Tenka", "天華"],
	"gender":"female",
	"tags": {
		"base":["big tits"],
		"demon":[],
	},
	"originalCharacter":true,
	"artist":DEKOSEN_TAKUJI_ID,
	},
	"061":{
	"name":["Yulya", "ユーリヤ"],
	"gender":"female",
	"tags": {
		"base":["dark skin", "small breasts", "maid"],
		"demon":[]
	},
	"originalCharacter":true,
	"artist":GARA_AYURI_ID,
	},
	"062":{
	"name":["Larkshasha", "ラークシャシャ"],
	"gender":"female",
	"tags": {
		"base":["dark skin", "big breasts", "oni"],
		"demon":[],
	},
	"originalCharacter":true,
	"artist":KOKONOKI_NAO_ID,
	},
}
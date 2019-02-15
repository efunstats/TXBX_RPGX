// CharacterID = ID from characterMeta, make sure it's an Array.

// characterForm = the version of the character e.g. young for TA:Zero Asagi, demon
// for Demon sakura, vampire for Vampire asagi, etc.
// if in doubt just put their usual faction.
// e.g. Asagi, Taimanin

// tags = What happens in the scene, character tags will get loaded automatically
// so don't add a tag big breasts to a scene where the character tag is big breasts
// nothing will break it's just pointless.

// ignoredCharacterTags = character tags are what a character is like usually but if
// something changes in the scene that causes one of their tags to become incorrect
// put it in here
// e.g. A lot of characters have the bodysuit tag but if they're completelky naked
// all the way through the scene or just don't wear their bodysuit then you would
// add bodysuit to ignoredCharacterTags for that scene.

// artistOverwrite = characterID already store the artist but if for some reason a
// different artist than usual does a scene with that character then enter the new
// artists ID in to there.

// Tags are the same as EH tags https://ehwiki.org/wiki/Fetish_Listing
//
// Only tag what happens in the scene and isn't already in character tags
// e.g. a scene with Asagi does not need to be tagged with big breasts


/* TEMPLATE

	"0000":{
		"characterID":CHARACTER_ID,
		"characterForm":"",
		"sceneTags":{
			"female":[],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},

	// Multi character

	"0000":{
		"characterID":[CHARACTER1_ID, CHARACTER2_ID],
		"characterForm":"[CHARACTER1 FORM, CHARACTER2 FORM]",
		"sceneTags":{
			"female":[],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[[CHARACTER1 IGNORED, CHARACTER2 IGNORED]],
		"artistOverwrite":"",
	},

*/

const IGAWA_ASAGI_ID = "001";
const IGAWA_SAKURA_ID = "002";
const KOUKAWA_OBORO_ID = "003";
const YATSU_MURASAKI_ID = "004";
const INGRID_ID = "005";
const SAYA_ID = "006";
const KOUKAWA_ASUKA_ID = "007";
const MIZUKI_YUKIKAZE_ID = "008"
const AKIYAMA_RINKO_ID = "009";
const MIZUKI_SHIRANUI_ID = "010";
const KOUSAKA_SHIZURU_ID = "011";
const SHINGANJI_KURENAI_ID = "012";
const MAKISHIMA_AYAME_ID = "013";
const FELICIA_ID = "014";
const LILIM_ID = "015";
const NASARA_ID = "016";
const ALKA_STEEL_ID = "017";
const CERASTES_ID = "018";
const LILITH_ID = "019";
const RINA_ID = "020";
const MINASAKI_ID = "021";
const MICHEA_SILKYS_ID = "022";
const DOLORES_ID = "023";
const NADIA_ID = "024";
const ANGE_ID = "025";
const MIRABELL_BELL_ID = "026";
const OOSHIMA_SHIZUKU_ID = "027";
const YURI_HISUI_ID = "028";
const GRAN_ID = "029";
const KISARAGI_ID = "030";
const WISP_ID = "031";
const WIGHT_ID = "032";
const CHEVALIER_ID = "033";
const FUUMA_SAIKA_ID = "034";
const AINA_WINCHESTER_ID = "035";
const UEHARA_RIN_ID = "036";
const SHINOHARA_MARI_ID = "037";
const YUKINA_GRACE_ID = "038";
const SEDONA_ARSTONA_ID = "039";
const BRIDGETTE_ID = "040";
const MERODO_KUROA_ID = "041";
const FUUMA_AMANE_ID = "042";
const KURUMI_S_SAKAZAKI_ID = "043";
const IO_ORION_ID = "044";
const YUBASHIRI_IBUKI_ID = "045";
const KISE_HOTARU_ID = "046";
const SANADA_HOMURA_ID = "047";
const LUST_ID = "048";
const CRACKLE_ID = "049";
const SHIDOU_RINKA_ID = "050";
const SNAKE_LADY_ID = "051";
const CECILIA_CELLO_ID = "052";
const FORCIA_ID = "053";
const KANON_ID = "054";
const DONNA_BURROGHS_ID = "055";
const NO16_SONIA_ID = "056";
const KAMIMURA_MAIKA_ID = "057";
const ROKKA_ID = "058";
const SHIGA_ASATSUKI_ID = "059";
const TENKA_ID = "060";
const YULYA_ID = "061";
const LARKSHASHA_ID = "062";
const CLEAR_LOBEL_ID = "063";
const JINGAI_NO_ORYOU_ID = "064";
const MIRIAM_ID = "065";


sceneMeta = {
	"0001_1":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["anal", "fingering", "sex toys", "vaginal sticker"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0001_2":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["anal", "ahegao", "nakadashi", "vaginal sticker"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0002_1":{
		"characterID":MAKISHIMA_AYAME_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob", "deepthroat", "cunnilingus"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0002_2":{
		"characterID":MAKISHIMA_AYAME_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["x-ray", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0003_1":{
		"characterID":CRACKLE_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["handjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0003_2":{
		"characterID":CRACKLE_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["cunnilingus", "nakadashi", "blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0004_1":{
		"characterID":KOUKAWA_OBORO_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["rimjob", "handjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0004_2":{
		"characterID":KOUKAWA_OBORO_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0005_1":{
		"characterID":MIZUKI_SHIRANUI_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["bondage", "oil", "fingering", "electric shocks", "urination", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0005_2":{
		"characterID":MIZUKI_SHIRANUI_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "bukkake", "blowjob", "lingerie"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0006_1":{
		"characterID":SHINGANJI_KURENAI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["fingering", "anal", "squirting", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0006_2":{
		"characterID":SHINGANJI_KURENAI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0007_1":{
		"characterID":LILIM_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["fingering", "sex toys"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0007_2":{
		"characterID":LILIM_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "urination", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0008_1":{
		"characterID":NASARA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["paizuri"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0008_2":{
		"characterID":NASARA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["leg lock", "nakadashi", "ahegao", "defloration"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0009_1":{
		"characterID":FUUMA_AMANE_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0009_2":{
		"characterID":FUUMA_AMANE_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0010_1":{
		"characterID":INGRID_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["lingerie", "prostitution", "eye mask", "fingering", "sex toys", "ahegao", "piercing"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0010_2":{
		"characterID":INGRID_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["lingerie", "prostitution", "piercing", "bukkake", "nakadashi", "blowjob", "cervix penetration", "inflation", "double penetration"],
			"male":["orc"],
			"misc":["group", "mmf threesome"],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0011_1":{
		"characterID":SHIDOU_RINKA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bondage", "piercing", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[""],
		"artistOverwrite":"",
	},
	"0011_2":{
		"characterID":SHIDOU_RINKA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["piercing", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0012_1":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0012_2":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob", "sex toys", "anal", "spanking", "fingering", "ahegao", "gaping", "double penetration"],
			"male":[],
			"misc":["group", "mmf threesome"],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0013_1":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0013_2":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0014_1":{
		"characterID":SAYA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["bondage", "pillory", "sex toys", "blow job", ],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["tentacles"],
		"artistOverwrite":"",
	},
	"0014_2":{
		"characterID":SAYA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "anal", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["tentacles"],
		"artistOverwrite":"",
	},
	"0015_1":{
		"characterID":ALKA_STEEL_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["fingering", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0015_2":{
		"characterID":ALKA_STEEL_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["machine", "sex toys", "anal", "double penetration", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0016":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["paizuri", "bukkake", "blowjob", "sleeping"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0017":{
		"characterID":YATSU_MURASAKI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bondage", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0018":{
		"characterID":KURUMI_S_SAKAZAKI_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["handjob", "nakadashi", "femdom"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0019":{
		"characterID":CERASTES_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["fingering"],
			"male":["handjob"],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0020":{
		"characterID":LILITH_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["defloration", "lactation", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0021":{
		"characterID":RINA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["urination", "defloration", "nakadashi", "rape"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0022":{
		"characterID":IGAWA_SAKURA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "ahegao", "blowjob", "tentacles", "double penetration", "deepthroat", "handjob", "urination"],
			"male":[],
			"misc":["group", "harem"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0023":{
		"characterID":MINASAKI_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "sex toys", "anal", "bukkake", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0024":{
		"characterID":MICHEA_SILKYS_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["rape", "blowjob", "sex toys", "anal", "pillory", "bondage", "double penetration", "nakadashi", "bukkake"],
			"male":["old man"],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0025":{
		"characterID":DOLORES_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["fingering", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0026":{
		"characterID":KOUSAKA_SHIZURU_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["paizuri", "blowjob", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0027":{
		"characterID":IGAWA_SAKURA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["closed eyes", "blowjob", "deepthroat"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0028":{
		"characterID":NADIA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["unusual pupils", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0029":{
		"characterID":ANGE_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["tentacles", "robot"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0030":{
		"characterID":MIRABELL_BELL_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["drugs", "paizuri", "ahegao", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0031":{
		"characterID":YATSU_MURASAKI_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["machine", "sex toys", "double penetration", "electric shocks", "drugs", "squirting", "ahegao", "lactation", "nakadashi", "fingering", "kissing"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0032":{
		"characterID":OOSHIMA_SHIZUKU_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["sweating", "unusual pupils", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0033":{
		"characterID":YURI_HISUI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0034":{
		"characterID":GRAN_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["fingering", "blowjob", "double penetration", "squirting", "anal", "rape", "nakadashi"],
			"male":[],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0035":{
		"characterID":KISARAGI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bondage", "rape", "nakadashi", "anal", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0036":{
		"characterID":FELICIA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["harem", "kissing", "ahegao", "fingering", "nakadashi"],
			"male":[],
			"misc":["group"],
		},
		"ignoredCharacterTags":["sundress"],
		"artistOverwrite":"",
	},
	"0037":{
		"characterID":WISP_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["ahegao", "nakadashi", "x-ray"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0038":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["blowjob", "cunnilingus", "squirting", "kissing", "x-ray", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0039":{
		"characterID":WIGHT_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["bestiality", "ahegao", "nakadashi", "sex toys", "bondage", "inflation", "lactation", "double penetration"],
			"male":["robot", "dog", "urination"],
			"misc":["group", "mmf threesome"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0040":{
		"characterID":CHEVALIER_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["face sitting", "femdom", "cunnilingus", "footjob", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0041":{
		"characterID":FUUMA_SAIKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["fingering", "sex toys", "bondage", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0042":{
		"characterID":KOUKAWA_OBORO_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["fingering", "kissing", "squirting", "piercing", "crotch tattoo", "nakadashi", "bukkake", "handjob", "ahegao"],
			"male":["harem", "dilf"],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0043":{
		"characterID":AINA_WINCHESTER_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["paizuri", "blowjob", "nakadashi", "ahegao"],
			"male":["dilf"],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0044":{
		"characterID":UEHARA_RIN_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["femdom", "footjob", "sweating"],
			"male":["electric shocks"],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0045":{
		"characterID":INGRID_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["kimono", "paizuri", "blowjob", "bukkake", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0046":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["rape", "stomach deformation", "blowjob", "double penetration", "inflation", "spanking", "bukkake"],
			"male":["orc"],
			"misc":["group", "mmf threesome"],
		},
		"ignoredCharacterTags":[""],
		"artistOverwrite":"",
	},
	"0047":{
		"characterID":SHINOHARA_MARI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bondage", "pillory", "x-ray", "ahegao", "nakadashi", "blowjob", "handjob"],
			"male":[],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0048":{
		"characterID":YUKINA_GRACE_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0049":{
		"characterID":SEDONA_ARSTONA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["tentacles", "drugs", "blowjob", "anal", "double penetration", "triple penetration", "rape"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0050":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["paizuri", "bukkake", "ahegao", "tentacles", "blowjob", "double penetration", "inflation"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0051":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["blowjob", "fingering", "anal", "ahegao", "lingerie", "x-ray", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0052_1":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bondage", "fingering", "anal", "double penetration", "drugs", "urination", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0052_2":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["x-ray", "nakadashi", "ahegao", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0053_1":{
		"characterID":SNAKE_LADY_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["fingering", "ahegao"],
			"male":["handjob"],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0053_2":{
		"characterID":SNAKE_LADY_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["ahegao", "nakadashi", "urethra insertion", "sex toys"],
			"male":["handjob"],
			"misc":[],
		},
		"ignoredCharacterTags":["eye mask"],
		"artistOverwrite":"",
	},
	"0054":{
		"characterID":KANON_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["rape", "bukkake", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},

	"0055":{
		"characterID":BRIDGETTE_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["rape", "defloration", "blowjob", "double penetration", "bukkake"],
			"male":["orc"],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0056":{
		"characterID":SANADA_HOMURA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["anal", "bukkake", "ahegao"],
			"male":[""],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0057_1":{
		"characterID":NO16_SONIA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["handjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0057_2":{
		"characterID":NO16_SONIA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0058_1":{
		"characterID":SHIGA_ASATSUKI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob", "fingering"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0058_2":{
		"characterID":SHIGA_ASATSUKI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["anal", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0059":{
		"characterID":MERODO_KUROA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["body painting", "exhibitionism", "fingering", "squirting", "ahegao", "solo action"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0060":{
		"characterID":YUBASHIRI_IBUKI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0061":{
		"characterID":DONNA_BURROGHS_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["lactation", "masturbation", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0062":{
		"characterID":CECILIA_CELLO_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["paizuri", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0063":{
		"characterID":ROKKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0064":{
		"characterID":FORCIA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0065_1":{
		"characterID":KISE_HOTARU_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["fingering", "urination"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0065_2":{
		"characterID":KISE_HOTARU_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0066_1":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["kissing", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0066_2":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["kissing", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0067_1":{
		"characterID":MIZUKI_SHIRANUI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["blowjob", "double penetration", "lingerie", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0067_2":{
		"characterID":MIZUKI_SHIRANUI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["rimjob", "lingerie", "ahegao", "nakadashi"],
			"male":[],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},

	"0068_1":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0068_2":{
		"characterID":MIZUKI_YUKIKAZE_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["nakadashi", "squirting", "anal"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0069_1":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["kissing", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0069_2":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["paizuri", "bukkake", "blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":["bodysuit"],
		"artistOverwrite":"",
	},
	"0070_1":{
		"characterID":IGAWA_SAKURA_ID,
		"characterForm":"young",
		"sceneTags":{
			"female":["blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0070_2":{
		"characterID":IGAWA_SAKURA_ID,
		"characterForm":"young",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0071_1":{
		"characterID":KOUKAWA_OBORO_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["handjob", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0071_2":{
		"characterID":KOUKAWA_OBORO_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["handjob", "fingering", "blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0072_1":{
		"characterID":KAMIMURA_MAIKA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["fingering", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0072_2":{
		"characterID":KAMIMURA_MAIKA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["piercing", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0073":{
		"characterID": LUST_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["leg lock", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0074":{
		"characterID":TENKA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["double penetration", "fingering", "ahegao", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0075":{
		"characterID":IO_ORION_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0076_1":{
		"characterID":FUUMA_SAIKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["paizuri", "blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0076_2":{
		"characterID":FUUMA_SAIKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},

	"0078":{
		"characterID":YULYA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["blowjob", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0079":{
		"characterID":LARKSHASHA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["blowjob", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0080_1":{
		"characterID":LILITH_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["christmas", "paizuri", "lactation", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0080_2":{
		"characterID":LILITH_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "lactation", "blowjob"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0081_1":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["christmas", "rape", "fingering", "drugs", "ahegao", "rape"],
			"male":["shotacon"],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0081_2":{
		"characterID":AKIYAMA_RINKO_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["christmas", "rape", "blowjob", "ahegao", "bukkake", "nakadashi", "drugs"],
			"male":["shotacon"],
			"misc":["group"],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0082":{
		"characterID":ANGE_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["christmas", "cunnilingus", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0083":{
		"characterID":SHINOHARA_MARI_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["christmas", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0084_1":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"young",
		"sceneTags":{
			"female":["kimono", "filming", "blowjob", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0084_2":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"young",
		"sceneTags":{
			"female":["kimono", "filming", "spanking", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0085_1":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["kimono", "blowjob", "paizuri", "bukkake", "body writing"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0085_2":{
		"characterID":KOUKAWA_ASUKA_ID,
		"characterForm":"usf",
		"sceneTags":{
			"female":["kimono", "nakadashi", "anal", "ahegao", "body writing"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0086":{
		"characterID":SANADA_HOMURA_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["kimono", "handjob", "nakadashi", "ahegao"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0087":{
		"characterID":FELICIA_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["kimono", "blowjob", "cunnilingus"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0088_1":{
		"characterID":CLEAR_LOBEL_ID,
		"characterForm":"base",
		"sceneTags":{
			"female":["handjob", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0088_2":{
		"characterID":CLEAR_LOBEL_ID,
		"characterForm":"base",
		"sceneTags":{
			"female":["kissing", "nakadashi"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0089_1":{
		"characterID":KOUSAKA_SHIZURU_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["fingering"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0089_2":{
		"characterID":KOUSAKA_SHIZURU_ID,
		"characterForm":"taimanin",
		"sceneTags":{
			"female":["bunny girl", "bukkake"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0090":{
		"characterID":JINGAI_NO_ORYOU_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["machine", "sex toys", "electric shocks"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
	"0091":{
		"characterID":MIRIAM_ID,
		"characterForm":"demon",
		"sceneTags":{
			"female":["nakadashi", "unusual pupils"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},

	"0138":{
		"characterID":IGAWA_ASAGI_ID,
		"characterForm":"young",
		"sceneTags":{
			"female":["paizuri", "blowjob", "oil"],
			"male":[],
			"misc":[],
		},
		"ignoredCharacterTags":[],
		"artistOverwrite":"",
	},
};
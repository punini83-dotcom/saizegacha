const menuList = [
    {num: 1202, name: "小エビのサラダ", price: 350},
    {num: 1205, name: "わかめのサラダ", price: 350},
    {num: 1209, name: "チキンのサラダ", price: 350},

    {num: 1301, name: "コーンクリームスープ", price: 150},
    {num: 1305, name: "田舎風ミネストローネ", price: 300},
    {num: 1307, name: "たまねぎのズッパ", price: 300},

    {num: 1401, name: "辛味チキン", price: 300},
    {num: 1402, name: "アロスティチーニ", price: 400},
    {num: 1403, name: "ほうれん草のソテー", price: 200},
    {num: 1404, name: "ポップコーンシュリンプ", price: 300},
    {num: 1405, name: "エスカルゴのオーブン焼き", price: 400},
    {num: 1406, name: "小エビのカクテル", price: 280},
    {num: 1407, name: "チョリソー", price: 400},
    {num: 1408, name: "蒸し鶏の香味ソース", price: 280},
    {num: 1410, name: "ムール貝のガーリック焼き", price: 400},
    {num: 1413, name: "キャロットラペ", price: 200},
    {num: 1416, name: "ポテトのグリル", price: 300},
    {num: 1417, name: "バッファローモッツアレラのカプレーゼ", price: 430},
    {num: 1422, name: "生ハム", price: 320},
    {num: 1423, name: "生ハムとバッファローモッツアレラの盛り合わせ", price: 500},
    {num: 1425, name: "柔らか青豆の温サラダ", price: 200},
    {num: 1452, name: "アロスティチーニ　Wサイズ", price: 800},

    {num: 2101, name: "ミラノ風ドリア", price: 300},
    {num: 2103, name: "半熟卵のミラノ風ドリア", price: 350},
    {num: 2108, name: "焼チーズミラノ風ドリア", price: 350},
    {num: 2110, name: "タラコとポップコーンシュリンプのマカロニグラタン", price: 400},
    {num: 2109, name: "ポップコーンシュリンプとタラコのクリームグラタン", price: 430},

    {num: 2203, name: "バッファローモッツァレラのマルゲリータピザ", price: 400},
    {num: 2204, name: "野菜ときのこのピザ", price: 400},
    {num: 2206, name: "たっぷりコーンのピザ", price: 400},
    {num: 2208, name: "ソーセージピザ", price: 400},

    {num: 2301, name: "タラコソースシシリー風", price: 400},
    {num: 2303, name: "ペペロンチーノ", price: 300},
    {num: 2304, name: "パルマ風スパゲッティ", price: 400},
    {num: 2305, name: "カルボナーラ", price: 500},
    {num: 2306, name: "ミートソースボロニア風", price: 400},
    {num: 2310, name: "スープ入り塩味ボンゴレ", price: 500},
    {num: 2316, name: "半熟卵のミートソースボロニア風", price: 450},
    {num: 2317, name: "半熟卵のペペロンチーノ", price: 350},
    {num: 2318, name: "半熟卵のカルボナーラ", price: 550},
    {num: 2320, name: "小エビのタラコソース", price: 540},
    {num: 2321, name: "きのことほうれん草のクリームスパゲッティ", price: 600},
    {num: 2325, name: "ペンネアラビアータ", price: 430},
    {num: 2328, name: "イカの墨入りセピアソース", price: 500},

    {num: 2402, name: "若鶏のディアボラ風", price: 500},
    {num: 2403, name: "イタリアンハンバーグ", price: 500},
    {num: 2404, name: "柔らかチキンのチーズ焼き", price: 500},
    {num: 2406, name: "ハンバーグステーキ", price: 400},
    {num: 2407, name: "ディアボラ風ハンバーグ", price: 500},
    {num: 2418, name: "ミックスグリル", price: 650},
    {num: 2419, name: "ビーフステーキ", price: 1090},

    {num: 3101, name: "ライス", price: 150},
    {num: 3102, name: "ラージライス", price: 200},
    {num: 3103, name: "スモールライス", price: 100},

    {num: 3110, name: "フォッカチオ", price: 150},
    {num: 3111, name: "ガーリックフォッカチオ", price: 200},
    {num: 3112, name: "シナモンフォッカチオ", price: 200},
    {num: 3113, name: "タラコフォッカチオ", price: 250},
    {num: 3114, name: "チーズフォッカチオ", price: 250},

    {num: 3201, name: "ティラミスクラシコ", price: 300},
    {num: 3205, name: "ミルクジェラート", price: 250},
    {num: 3206, name: "イタリアンプリン", price: 250},
    {num: 3207, name: "チョコレートケーキ", price: 300},
    {num: 3212, name: "プリンとティラミスクラシコの盛合せ", price: 500},
    {num: 3213, name: "トリフアイスクリーム", price: 350},
    {num: 3214, name: "ジェラート＆シナモンフォッカチオ", price: 450},
    {num: 3215, name: "コーヒーゼリー＆ミルクジェラート", price: 350},
    {num: 3216, name: "チョコレートケーキ＆ミルクジェラート", price: 500},

    {num: 4301, name: "トッピング半熟卵", price: 50},
    {num: 4304, name: "トッピング野菜ソース", price: 100},
    {num: 4307, name: "トッピング粉チーズ", price: 100}
]

/* ガチャ関数 */
function mainGacha(num) {
    let remain = num;
    const result = [];

    while (remain > 0) {
        const matchmenu = menuList.filter(menu => menu.price <= remain);
        if (matchmenu.length === 0) {
            break;
        }

        const randomindex = Math.floor(Math.random() * matchmenu.length);
        result.push(matchmenu[randomindex]);
        remain -= matchmenu[randomindex].price;
    }
    return [result, remain];
}
/* 重複を整理 */
function condensend(result){
    const conRes = [];
    result.forEach(item =>{
        const exist = conRes.find(v => v.name === item.name);
        if(exist){
            exist.count++;
        }else{
            conRes.push({
                name: item.name,
                price: item.price,
                count: 1
            });
        }
    });
    return conRes;
}
/* 表示させる */
const resultPage = document.getElementById("resultPage");
resultPage.style.display = "none";
function displayResult(result) {
    const cartTableBody = document.getElementById("cart-table-body");
    cartTableBody.innerHTML = "";

    const condensedList = condensend(result);

    condensedList.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.count}</td>
            <td>${item.price}</td>
        `;
        cartTableBody.appendChild(row);
    });

    // 合計個数を計算して表示
    const totalNum = result.length;
    document.getElementById("total-num").textContent = `　${totalNum} 個`;

    // 合計金額を計算して表示
    const totalPrice = result.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total-price").textContent = `合計 ${totalPrice} 円（税込）`;

    resultPage.style.display = "block";
}

const setmenu = document.getElementById("setpricepage-overlay");
setmenu.style.visibility = "hidden";

const setbtn = document.getElementById("settingbtn");
setbtn.addEventListener("click", function() {
    setmenu.style.visibility = "visible";
});
const confirmBtn = document.getElementById("confirmPriceButton");
confirmBtn.addEventListener("click", function() {
    const customPrice = parseInt(document.getElementById("inputpri-num").value);
    if(customPrice<0){
        document.getElementById("inputpri-num").value = 0;
    }else if(customPrice<100){
        document.getElementById("inputpri-num").value = 100;
    }else if(customPrice>100000){
        document.getElementById("inputpri-num").value = 100000;
    }else if(customPrice%50 != 0){
        document.getElementById("inputpri-num").value = Math.floor(customPrice/50)*50;
    }
    setmenu.style.visibility = "hidden";
});

// HTMLの要素を連れてくる
const priceRadios = document.querySelectorAll('input[name="sepri"]');
const customInput = document.getElementById("inputpri-num");

// すべてのラジオボタンに「切り替わったときのイベント」を登録する
priceRadios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (document.getElementById("radio-custom").checked) {
            // 「自由に入力」が選ばれていたら、入力欄の無効化（disabled）を解除！
            customInput.disabled = false;
        } else {
            // それ以外が選ばれていたら、入力欄をグレーアウトして使えなくする
            customInput.disabled = true;
        }
    });
});

// ガチャスタート
const startBtn = document.getElementById("startButton");
startBtn.addEventListener("click", startGacha);

function startGacha() {
    let customPrice;
    let Result;
    if(document.getElementById("radio-custom").checked) {
        customPrice = parseInt(document.getElementById("inputpri-num").value);
    let count = 0;
    do {
        Result = mainGacha(customPrice);
        count++;
        if (count > 1000) break; // 念のための無限ループ防止
    } while (Result[1] !== 0);

    } else {
        customPrice = Math.floor(Math.random() * ((5000 - 100 + 1)/10) + 100) * 10;
        Result = mainGacha(customPrice);
    }

    displayResult(Result[0]);

}

// リトライ
const restartBtn = document.getElementById("restartButton");
restartBtn.addEventListener("click", function(){
    resultPage.style.display = "none";
});

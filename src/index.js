window.onload = function () {
  // オブジェクトと変数の準備
  const total_win_count = document.getElementById("total_win_count"),
    total_lose_count = document.getElementById("total_lose_count"),
    round_count = document.getElementById("round_count"),
    nejiki_count = document.getElementById("nejiki_count"),
    remain_count = document.getElementById("remain_count"),
    winning_streak_count = document.getElementById("winning_streak_count"),
    target_nejiki = document.getElementById("target_nejiki"),
    win_btn = document.getElementById("win_btn"),
    lose_btn = document.getElementById("lose_btn"),
    winning_streak = document.getElementById("winning_streak");

  let win_counter = 0;
  let total_win_counter = 0;
  let total_lose_counter = 0;

  // 勝利ボタンクリック処理
  win_btn.onclick = function () {
    if (win_counter < 49) {
      win_counter += 1;
      total_win_counter += 1;
      winning_streak_count.innerHTML = win_counter;
      total_win_count.innerHTML = total_win_counter;
      remain_count.innerHTML = 49 - win_counter;
      round_count.innerHTML = Math.floor(win_counter / 7 + 1);
      if (win_counter >= 21) {
        nejiki_count.innerHTML = 49 - win_counter;
        target_nejiki.innerHTML = "金ネジキ";
        target_nejiki.classList.replace("bgcolor_silver", "bgcolor_gold");
      } else {
        nejiki_count.innerHTML = 21 - win_counter;
        target_nejiki.innerHTML = "銀ネジキ";
      }
    } else {
      winning_streak.style.color = "#FF0000";
      winning_streak.innerHTML = "おめでとう!!";
    }
  };

  // 敗北ボタンクリック処理
  lose_btn.onclick = function () {
    if (win_counter < 49) {
      win_counter = 0;
      total_lose_counter += 1;
      winning_streak_count.innerHTML = win_counter;
      total_lose_count.innerHTML = total_lose_counter;
      remain_count.innerHTML = 49 - win_counter;
      round_count.innerHTML = 1;
      nejiki_count.innerHTML = 21;
      target_nejiki.innerHTML = "銀ネジキ";
      target_nejiki.classList.replace("bgcolor_gold", "bgcolor_silver");
    }
  };
};

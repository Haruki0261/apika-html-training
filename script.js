// ハンバーガーメニューの開閉機能
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.querySelector(".l-header__hamburger");
  const nav = document.querySelector(".l-header__nav");
  const hamburgerLines = document.querySelectorAll(".l-header__hamburger-line");
  const header = document.querySelector(".l-header");
  const body = document.body;

  // メニューの開閉状態を管理
  let isMenuOpen = false;

  // ハンバーガーボタンのクリックイベント
  hamburgerButton.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // メニューを開く
      openMenu();
    } else {
      // メニューを閉じる
      closeMenu();
    }
  });

  // メニューを開く関数
  function openMenu() {
    // ナビゲーションを表示
    nav.style.display = "block";
    nav.style.transform = "translateX(0)";

    // ハンバーガーアイコンを×に変化
    hamburgerLines[0].style.transform = "rotate(45deg)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg)";

    // headerを固定
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.zIndex = "1001";

    // bodyのスクロールを無効化
    body.style.overflow = "hidden";

    // ボタンのaria-labelを更新
    hamburgerButton.setAttribute("aria-label", "メニューを閉じる");
  }

  // メニューを閉じる関数
  function closeMenu() {
    // ナビゲーションを非表示
    nav.style.transform = "translateX(100%)";

    // ハンバーガーアイコンを元に戻す
    hamburgerLines[0].style.transform = "rotate(0) translate(0, 0)";
    hamburgerLines[1].style.opacity = "1";
    hamburgerLines[2].style.transform = "rotate(0) translate(0, 0)";

    // headerの固定を解除
    header.style.position = "";
    header.style.top = "";
    header.style.left = "";
    header.style.right = "";
    header.style.zIndex = "";

    // bodyのスクロールを有効化
    body.style.overflow = "";

    // ボタンのaria-labelを更新
    hamburgerButton.setAttribute("aria-label", "メニューを開く");

    // アニメーション完了後にdisplayをnoneにする
    setTimeout(() => {
      if (!isMenuOpen) {
        nav.style.display = "none";
      }
    }, 300);
  }

  // メニュー外をクリックしたら閉じる
  document.addEventListener("click", function (event) {
    if (
      isMenuOpen &&
      !hamburgerButton.contains(event.target) &&
      !nav.contains(event.target)
    ) {
      isMenuOpen = false;
      closeMenu();
    }
  });

  // ESCキーでメニューを閉じる
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen) {
      isMenuOpen = false;
      closeMenu();
    }
  });
});

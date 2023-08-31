// 文字列を逆順にする
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // 文字列を小文字に変換する
  this.processor = function(string) {
    // ここにコードを書く
    return string.toLowerCase();
  }

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
  TranslatedPhrase.prototype = new Phrase();


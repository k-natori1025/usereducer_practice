// ステートの初期状態をまとめて記述
export const init = {
  loading: false,
  todo: {},
  error: false,
};

// action payload = データ
// action type = 状況(文字列で設定する)
export const todoIf = (state, action) => {
  // APIの取得を開始した状況
  if(action.type === "START") {
    return {
      loading: true,
      todo: {},
      error: false,
    }
  }
  // APIを取得し終わった状況
  else if(action.type === "SUCCESS") {
    return {
      loading: false,
      todo: action.payload,
      error: false,
    }
  }
  // エラーが起きた状況
  else if(action.type === "ERROR") {
    return {
      loading: false,
      todo: {},
      error: true,
    }
  }
}

export const todoSwitch = (state, action) => {
  switch(action.type){
    case "START":
      return {
        loading: true,
        todo: {},
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        todo: action.payload,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        todo: {},
        error: true,
      };
    default:
      return state;
  }
}


function build_board() {
  var board = [];
  var windex = [];
  GRID_SIZE = vm.GRID_SIZE;

  for (let i = 0; i < GRID_SIZE; i++) {
    board[i] = []
  }
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      board[i][j] = {
        val: '',
        bg: ''
      }
    }
  }
  var hor_arr = []
  for (let i = 0; i < GRID_SIZE; i++) {
    hor_arr[i] = []
    for (let j = 0; j < GRID_SIZE; j++) {
      hor_arr[i][j] = [i, j]
    }
  }
  windex = windex.concat(hor_arr);
  var ver_arr = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    ver_arr[i] = []
    for (let j = 0; j < GRID_SIZE; j++) {
      ver_arr[i][j] = [j, i]
    }
  }
  windex = windex.concat(ver_arr);
  var d_arr_first = [];
  for (let i = 0; i < 1; i++) {
    d_arr_first[i] = []
    for (let j = 0; j < GRID_SIZE; j++) {
      d_arr_first[i][j] = [j, j]
    }
  }
  windex = windex.concat(d_arr_first);
  var d_arr_second = [];
  for (let i = 0; i < 1; i++) {
    d_arr_second[i] = []
    let c = 0
    for (let j = GRID_SIZE - 1; j > -1; j--) {
      d_arr_second[i][c] = [c, j]
      c++;
    }
  }
  windex = windex.concat(d_arr_second);

  vm.board = board
  vm.windex = windex
}

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn decoder(s: &str)-> String {
    let mut flag = false;
    let mut commend = "";
    let mut row = 0;  // 
    let mut col = 0;  // 
    let maze = [
        [0, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0],
    ];

//ss dddd ssssss dddd wwaa wwdd wwwaaw
    for (index, c) in s.char_indices() {
        if c == 'w' || c == 'a' || c == 's' || c == 'd' {
            if c == 'w'{
                if row > 0 && maze[row - 1][col] == 0 {
                    row -= 1;
                }
                else {
                    break;
                }
            }
            if c == 's'{
                if row < 8 && maze[row + 1][col] == 0 {
                    row += 1
                }
                else {
                    break;
                }
            }
            if c == 'a'{
                if col > 0 && maze[row][col - 1] == 0 {
                    col -= 1
                }
                else {
                    break;
                }
            }
            if c == 'd'{
                if col < 8 && maze[row][col + 1] == 0 {
                    col +=1
                }
                else {
                    break;
                }
            }
            if row == 0 && col == 6{
                commend = &s[index+1..];
                flag = true;
                break;
            }
        }
        else {
            break;
        }
    }
    if flag {
        alert(&commend);
    }
    return s.to_string(); 
}

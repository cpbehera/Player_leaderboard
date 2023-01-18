
const addPlayer = document.getElementById('addPlayer');



addPlayer.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const score = document.getElementById('score').value;
    

    const container = document.getElementById('container');

    

    const fullName = firstName+" "+lastName;

    container.innerHTML = `
    <table>
        <tr>
          <td>${fullName}</td>
          <td>${country}</td>
          <td>${score}</td>
          <td>
            <button>Delete</button>
          </td>
          <td>
            <button>+5</button>
          </td>
          <td>
            <button>-5</button>
          </td>
        </tr>
      </table>
    `
    
    
})

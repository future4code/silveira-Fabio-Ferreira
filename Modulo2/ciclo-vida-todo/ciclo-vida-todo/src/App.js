import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  :hover{
    cursor: pointer;
  }
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      id: Date.now(),
      texto: '',
      completa: false,
      tarefas: [],
      inputValue: '',
      filtro: ''
    }


   salvarTarefas = () => {
    localStorage.setItem("Tarefas", JSON.stringify(this.state.inputValue))
  }

  componentDidUpdate() {
    this.salvarTarefas()
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };

    let novaLista = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: novaLista})

  }

  selectTarefa = (id) => {
    let novaTarefa = this.state.tarefas.map((tarefas) => {
      if(id === tarefas.id){
        let novaLista = {
          ...tarefas,
          completa: !tarefas.completa
        }
        return novaLista 
       }
       else { return tarefas }
    });
    
    this.setState({tarefas: novaTarefa})

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} placeholder={"Nova Tarefa"} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

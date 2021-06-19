import React, { useState, useEffect } from "react";
import api from "../services/api";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Livro() {
  const classes = useStyles();
  const [livros, setLivros] = useState([]);

  async function handleDeleteLivro(id){
    try{
        await api.delete(`book/${id}`,{});
        setLivros(livros.filter(livro => livro.Codigo !== id));
    }catch(e){
        alert(e);
    }
}

  useEffect(() => {
    api.get("books", {}).then((response) => {
      setLivros(response.data);
    });
  }
  , []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Editora</StyledTableCell>
            <StyledTableCell align="center">ISBN</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {livros.map((livro) => (
            <StyledTableRow key={livro.codigo}>
              <StyledTableCell align="center">{livro.Codigo}</StyledTableCell>
              <StyledTableCell align="center">{livro.NomeAutor}</StyledTableCell>
              <StyledTableCell align="center">{livro.CodigoEditora}</StyledTableCell>
              <StyledTableCell align="center">{livro.ISBN}</StyledTableCell>
              <StyledTableCell align="center">
                  <button type="button" onClick={() => handleDeleteLivro(livro.Codigo)}>Excluir</button>   
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Livro;

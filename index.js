import express from "express";

const host = "0.0.0.0";
const port = 3002;
var listaServicos = [];

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
    resposta.send(`
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">MENU</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Opções
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="/cadastroServico">Cadastro de Serviços</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
                `)
            resposta.end();
});

app.get("/cadastroServico", (requisicao, resposta) =>{

    resposta.send(` 
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-85 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Serviço</h2>
                                    </div>
                                    <form method="POST" action="/cadastroServico" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="nomeFuncionario">Nome do Funcionário</label>
                                                <input type="text" class="form-control" id="nomeFuncionario" name="nomeF" placeholder="Nome do Funcionário">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="cpfFuncionario">CPF</label>
                                                <input type="text" class="form-control" id="cpfFuncionario" name="cpfF"placeholder="000.000.000-00">
                                            </div>
                                        </div>
                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">
                                                <label for="nomeCliente">Nome do Cliente</label>
                                                <input type="text" class="form-control" id="nomeCliente" name="nomeC" placeholder="Nome do Cliente">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="cpfCliente">CPF</label>
                                                <input type="text" class="form-control" id="cpfCliente" name="cpfC" placeholder="000.000.000-00">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="inputRua">Endereço - Rua</label>
                                            <input type="text" class="form-control" id="inputRua" name="rua" placeholder="Rua, nº">
                                        </div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCidade">Cidade</label>
                                                <input type="text" class="form-control" id="inputCidade" name="cidade" placeholder="Cidade">
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputEstado">Estado</label>
                                                <select id="inputEstado" name="uf" class="form-control">
                                                    <option selected>Escolher...</option>
                                                    <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
                                                    <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
                                                    <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
                                                    <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
                                                    <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
                                                    <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
                                                    <option>SP</option><option>SE</option><option>TO</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="inputCEP">CEP</label>
                                                <input type="text" class="form-control" id="inputCEP" name="cep" placeholder="00000-000">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="descricaoServico">Descrição do Serviço Realizado</label>
                                            <textarea class="form-control" id="descricaoServico" name="desc" rows="4" placeholder="Descreva o serviço realizado..."></textarea>
                                        </div>

                                        <div class="form-group">
                                            <label for="valorServico">Valor do Serviço Realizado (R$)</label>
                                            <input type="number" class="form-control" id="valorServico" name="valorServico" min="0" step="0.01" placeholder="Ex: 199.90">
                                        </div>

                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `);
        resposta.end();
});

app.post("/cadastroServico", (requisicao, resposta) => {
    const nomeF = requisicao.body.nomeF
    const cpfF = requisicao.body.cpfF
    const nomeC = requisicao.body.nomeC
    const cpfC = requisicao.body.cpfC
    const rua = requisicao.body.rua;
    const cidade = requisicao.body.cidade
    const estado = requisicao.body.uf
    const cep = requisicao.body.cep
    const descricao = requisicao.body.desc
    const valor = requisicao.body.valorServico;

    if(nomeF && cpfF && nomeC && cpfC && rua && cidade && estado && cep && descricao && valor)
    {    
        listaServicos.push({
            nomeF,
            cpfF,
            nomeC,
            cpfC,
            rua,
            cidade,
            estado,
            cep,
            descricao,
            valor,
        });
        resposta.redirect("/listaServicos");
    }
    else
    {
    
        let conteudo = `
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda w-20 mb-5 mt-5">
                                        <h2>Cadastro de Serviço</h2>
                                    </div>
                                    <form method="POST" action="/cadastroServico" class="row g-3 border p-2">
                                        <div class="form-row row">
                                            <div class="form-group col-md-8"> `;

                                            
                                        if(!nomeF)
                                        {
                                            conteudo = conteudo + `
                                            <label for="nomeFuncionario">Nome do Funcionário</label>
                                            <input type="text" class="form-control" id="nomeFuncionario" name="nomeF" value="${nomeF}" placeholder="Nome do Funcionário">
                                            <span class="text-danger">Insira o nome Por favor</span>
                                            `;
                                        }
                                        else
                                        {
                                            conteudo = conteudo + `
                                             <label for="nomeFuncionario">Nome do Funcionário</label>
                                            <input type="text" class="form-control" id="nomeFuncionario" name="nomeF" value="${nomeF}" placeholder="Nome do Funcionário">                                           
                                            `;
                                        }
                                        conteudo = conteudo + `</div>

                                            <div class="form-group col-md-4"> `;
                                        if (!cpfF) {
                                                conteudo = conteudo +`
                                                    <div class="form-group col-md-4">
                                                        <label for="cpfFuncionario">CPF</label>
                                                        <input type="text" class="form-control is-invalid" id="cpfFuncionario" name="cpfF" value="" placeholder="000.000.000-00">
                                                        <span class="text-danger">Informe o CPF do funcionário.</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `

                                                        <label for="cpfFuncionario">CPF</label>
                                                        <input type="text" class="form-control" id="cpfFuncionario" name="cpfF" value="${cpfF}" placeholder="000.000.000-00">
                                                `;
                                            } 
                                        conteudo = conteudo + `</div>

                                        
                                        <div class="form-row row">
                                            <div class="form-group col-md-8">`;
                                            if (!nomeC) {
                                                   conteudo = conteudo + `
                                                        <div class="form-group col-md-8">
                                                            <label for="nomeCliente">Nome do Cliente</label>
                                                            <input type="text" class="form-control is-invalid" id="nomeCliente" name="nomeC" value="" placeholder="Nome do Cliente">
                                                            <span class="text-danger">Insira o nome do cliente.</span>
                                                        </div>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="nomeCliente">Nome do Cliente</label>
                                                            <input type="text" class="form-control" id="nomeCliente" name="nomeC" value="${nomeC}" placeholder="Nome do Cliente">
                                                    `;      
                                                }
                                                
                                            conteudo = conteudo + `</div>

                                            </div>
                                            <div class="form-group col-md-4">`;
                                            if (!cpfC) {
                                                     conteudo = conteudo + `
                                                            <label for="cpfCliente">CPF do Cliente</label>
                                                            <input type="text" class="form-control is-invalid" id="cpfCliente" name="cpfC" value="" placeholder="000.000.000-00">
                                                            <span class="invalid-feedback">Informe o CPF do cliente.</span>
                                                    `;
                                                } else {
                                                     conteudo = conteudo + `
                                                            <label for="cpfCliente">CPF do Cliente</label>
                                                            <input type="text" class="form-control" id="cpfCliente" name="cpfC" value="${cpfC}" placeholder="000.000.000-00">   
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>

                                            <div class="form-group col-md-4">`;
                                                if (!rua) {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control is-invalid" id="inputRua" name="rua" value="" placeholder="Rua, nº">
                                                        <span class="text-danger">Insira o endereço.</span>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                        <label for="inputRua">Endereço - Rua</label>
                                                        <input type="text" class="form-control" id="inputRua" name="rua" value="${rua}" placeholder="Rua, nº">
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>

                                        <div class="form-row row">
                                            <div class="form-group col-md-6">`;
                                            if (!cidade) {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control is-invalid" id="inputCidade" name="cidade" value="" placeholder="Cidade">
                                                            <span class="text-danger">Insira a cidade.</span> 
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="inputCidade">Cidade</label>
                                                            <input type="text" class="form-control" id="inputCidade" name="cidade" value="${cidade}" placeholder="Cidade">
                                                        
                                                    `;
                                                }
                                            conteudo = conteudo + `</div>
                                            <div class="form-group col-md-4">`;
                                                if (!estado) {
                                                    conteudo = conteudo + `
                                                            <label for="inputEstado">Estado</label>
                                                            <select id="inputEstado" name="uf" class="form-control is-invalid">
                                                                <option selected value="">Escolher...</option>
                                                                <option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option>
                                                                <option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option>
                                                                <option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option>
                                                                <option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option>
                                                                <option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option>
                                                                <option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option>
                                                                <option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option>
                                                                <option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option>
                                                                <option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option>
                                                            </select>
                                                            <span class="text-danger">Escolha um estado.</span>
                                                    `;
                                                } else {
                                                    conteudo = conteudo + `
                                                            <label for="inputEstado">Estado</label>
                                                            <select id="inputEstado" name="uf" class="form-control">
                                                                <option value="">Escolher...</option>
                                                                <option value="AC" ${estado === 'AC' ? 'selected' : ''}>AC</option>
                                                                <option value="AL" ${estado === 'AL' ? 'selected' : ''}>AL</option>
                                                                <option value="AP" ${estado === 'AP' ? 'selected' : ''}>AP</option>
                                                                <option value="AM" ${estado === 'AM' ? 'selected' : ''}>AM</option>
                                                                <option value="BA" ${estado === 'BA' ? 'selected' : ''}>BA</option>
                                                                <option value="CE" ${estado === 'CE' ? 'selected' : ''}>CE</option>
                                                                <option value="DF" ${estado === 'DF' ? 'selected' : ''}>DF</option>
                                                                <option value="ES" ${estado === 'ES' ? 'selected' : ''}>ES</option>
                                                                <option value="GO" ${estado === 'GO' ? 'selected' : ''}>GO</option>
                                                                <option value="MA" ${estado === 'MA' ? 'selected' : ''}>MA</option>
                                                                <option value="MT" ${estado === 'MT' ? 'selected' : ''}>MT</option>
                                                                <option value="MS" ${estado === 'MS' ? 'selected' : ''}>MS</option>
                                                                <option value="MG" ${estado === 'MG' ? 'selected' : ''}>MG</option>
                                                                <option value="PA" ${estado === 'PA' ? 'selected' : ''}>PA</option>
                                                                <option value="PB" ${estado === 'PB' ? 'selected' : ''}>PB</option>
                                                                <option value="PR" ${estado === 'PR' ? 'selected' : ''}>PR</option>
                                                                <option value="PE" ${estado === 'PE' ? 'selected' : ''}>PE</option>
                                                                <option value="PI" ${estado === 'PI' ? 'selected' : ''}>PI</option>
                                                                <option value="RJ" ${estado === 'RJ' ? 'selected' : ''}>RJ</option>
                                                                <option value="RN" ${estado === 'RN' ? 'selected' : ''}>RN</option>
                                                                <option value="RS" ${estado === 'RS' ? 'selected' : ''}>RS</option>
                                                                <option value="RO" ${estado === 'RO' ? 'selected' : ''}>RO</option>
                                                                <option value="RR" ${estado === 'RR' ? 'selected' : ''}>RR</option>
                                                                <option value="SC" ${estado === 'SC' ? 'selected' : ''}>SC</option>
                                                                <option value="SP" ${estado === 'SP' ? 'selected' : ''}>SP</option>
                                                                <option value="SE" ${estado === 'SE' ? 'selected' : ''}>SE</option>
                                                                <option value="TO" ${estado === 'TO' ? 'selected' : ''}>TO</option>
                                                            </select>
                                                        </div>
                                                    `;
                                                }
                                                conteudo = conteudo + `</div>
                                            
                                            <div class="form-group col-md-2">`;
                                            if (!cep) {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control is-invalid" id="inputCEP" name="cep" value="" placeholder="00000-000">
                                                        <span class="text-danger">Informe o CEP.</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `
                                                        <label for="inputCEP">CEP</label>
                                                        <input type="text" class="form-control" id="inputCEP" name="cep" value="${cep}" placeholder="00000-000">
                                                `;
                                            }
                                            conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!descricao) {
                                                conteudo = conteudo + `
                                                    <label for="descricaoServico">Descrição do Serviço Realizado</label>
                                                    <textarea class="form-control is-invalid" id="descricaoServico" name="desc" rows="4" placeholder="Descreva o serviço realizado..."></textarea>
                                                    <span class="text-danger">Descreva o serviço realizado.</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `
                                                    <label for="descricaoServico">Descrição do Serviço Realizado</label>
                                                    <textarea class="form-control" id="descricaoServico" name="desc" rows="4" placeholder="Descreva o serviço realizado...">${descricao}</textarea>
                                                `;
                                            }
                                        conteudo = conteudo + `</div>

                                        <div class="form-group">`;
                                            if (!valor) {
                                                conteudo = conteudo + `
                                                    <label for="valorServico">Valor do Serviço Realizado (R$)</label>
                                                    <input type="number" class="form-control is-invalid" id="valorServico" name="valorServico" min="0" step="0.01" placeholder="Ex: 199.90">
                                                    <span class="text-danger">Informe o valor do serviço.</span>
                                                `;
                                            } else {
                                                conteudo = conteudo + `
                                                    <label for="valorServico">Valor do Serviço Realizado (R$)</label>
                                                    <input type="number" class="form-control" id="valorServico" name="valorServico" value="${valor}" min="0" step="0.01" placeholder="Ex: 199.90">
                                                `;
                                            }
                                        conteudo = conteudo + `</div>
                                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                                        <a class="btn btn-secondary" href="/">Voltar</a>
                                    </form>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
        `;
        resposta.send(conteudo);
        resposta.end();
    }
});

app.get("/listaServicos", (requisicao, resposta) => {
    let conteudo=`
            <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                        <title>Página Inicial</title>
                    </head>
                        <body>
                            <div class="container w-95 mb-10" >
                                    <div class="Legenda2 w-20 mb-5 mt-5">
                                        <h2>Serviços Cadastrados</h2>
                                    </div>
                                <table class="table table-striped table-dark table-hover">
                                    <thead>

                                        <tr>
                                            <th scope="col">Nome Funcionário</th>
                                            <th scope="col">CPF Funcionário</th>
                                            <th scope="col">Nome Cliente</th>
                                            <th scope="col">CPF Cliente</th>
                                            <th scope="col">Rua</th>
                                            <th scope="col">Cidade</th>
                                            <th scope="col">UF</th>
                                            <th scope="col">CEP</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;
                                        for(let i=0; i < listaServicos.length; i++)
                                        {
                                            conteudo = conteudo + `
                                            </tr>
                                                <td>${listaServicos[i].nomeF}</td>
                                                <td>${listaServicos[i].cpfF}</td>
                                                <td>${listaServicos[i].nomeC}</td>
                                                <td>${listaServicos[i].cpfC}</td>
                                                <td>${listaServicos[i].rua}</td>
                                                <td>${listaServicos[i].cidade}</td>
                                                <td>${listaServicos[i].estado}</td>
                                                <td>${listaServicos[i].cep}</td>
                                                <td>${listaServicos[i].descricao}</td>
                                                <td>${listaServicos[i].valor}</td>
                                            </tr>
                                            `;
                                        }
         conteudo=conteudo + `    </tbody>
                                </table>
                                <a class="btn btn-secondary" href="/cadastroServico">Continuar Cadastrando</a>
                            </div>
                        </body>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
            </html>`
    resposta.send(conteudo);
    resposta.end();
});

app.listen(port, host, () => {
    console.log(`Servidor em execução em http://${host}:${port}/`);
});

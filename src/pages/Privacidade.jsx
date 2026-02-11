import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Shield, ArrowLeft, Mail, Lock, Database, Eye, Trash2, Download } from 'lucide-react'

export default function Privacidade() {
  const rights = [
    { icon: Eye, title: 'Acesso', description: 'Saber quais dados temos sobre você' },
    { icon: Download, title: 'Portabilidade', description: 'Exportar seus dados a qualquer momento' },
    { icon: Trash2, title: 'Exclusão', description: 'Solicitar a remoção dos seus dados' },
    { icon: Lock, title: 'Correção', description: 'Atualizar dados incorretos ou incompletos' },
  ]

  return (
    <>
      <SEO 
        title="Política de Privacidade"
        description="Política de Privacidade do EssencialPet. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD."
        canonical="/privacidade"
        noindex={true}
      />
      
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o início
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-dark-900">
                  Política de Privacidade
                </h1>
                <p className="text-gray-500 text-sm">Última atualização: 11 de fevereiro de 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Your Rights Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 mb-8 text-white"
          >
            <h2 className="text-xl font-bold mb-4">Seus direitos sob a LGPD</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {rights.map((right) => (
                <div key={right.title} className="bg-white/10 rounded-xl p-4">
                  <right.icon className="w-6 h-6 mb-2" />
                  <h3 className="font-semibold">{right.title}</h3>
                  <p className="text-sm text-white/80">{right.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="prose prose-gray max-w-none">
              <h2>1. Introdução</h2>
              <p>
                A Essencial Comunicação ("nós", "nosso" ou "Empresa"), CNPJ 22.185.544/0001-08, 
                é a controladora dos dados pessoais coletados através do EssencialPet.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
                seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>

              <h2>2. Dados que Coletamos</h2>
              
              <h3>2.1 Dados do Usuário (você)</h3>
              <ul>
                <li><strong>Cadastro:</strong> Nome, email, telefone, CPF/CNPJ</li>
                <li><strong>Empresa:</strong> Nome do estabelecimento, endereço, segmento</li>
                <li><strong>Pagamento:</strong> Dados de cartão (processados por gateway seguro)</li>
                <li><strong>Uso:</strong> Logs de acesso, ações no sistema, preferências</li>
              </ul>

              <h3>2.2 Dados dos Clientes do Usuário</h3>
              <p>
                Como operador de dados, processamos informações que você cadastra sobre seus clientes:
              </p>
              <ul>
                <li><strong>Clientes:</strong> Nome, telefone, email, endereço</li>
                <li><strong>Pets:</strong> Nome, espécie, raça, data de nascimento, histórico</li>
                <li><strong>Vendas:</strong> Produtos adquiridos, datas, valores</li>
              </ul>

              <h2>3. Como Usamos os Dados</h2>
              <table>
                <thead>
                  <tr>
                    <th>Finalidade</th>
                    <th>Base Legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fornecer o serviço contratado</td>
                    <td>Execução de contrato</td>
                  </tr>
                  <tr>
                    <td>Enviar lembretes de recompra (seus clientes)</td>
                    <td>Legítimo interesse / Consentimento</td>
                  </tr>
                  <tr>
                    <td>Processar pagamentos</td>
                    <td>Execução de contrato</td>
                  </tr>
                  <tr>
                    <td>Enviar comunicações sobre o serviço</td>
                    <td>Legítimo interesse</td>
                  </tr>
                  <tr>
                    <td>Melhorar o produto</td>
                    <td>Legítimo interesse</td>
                  </tr>
                  <tr>
                    <td>Cumprir obrigações legais</td>
                    <td>Obrigação legal</td>
                  </tr>
                </tbody>
              </table>

              <h2>4. Compartilhamento de Dados</h2>
              <p>Compartilhamos dados apenas com:</p>
              <ul>
                <li><strong>WhatsApp/Meta:</strong> Para envio de mensagens automáticas</li>
                <li><strong>Gateway de pagamento:</strong> Para processamento de cobranças</li>
                <li><strong>Serviços de hospedagem:</strong> Armazenamento seguro em nuvem</li>
                <li><strong>Autoridades:</strong> Quando exigido por lei ou ordem judicial</li>
              </ul>
              <p>
                <strong>Não vendemos</strong> seus dados para terceiros. Não compartilhamos dados de 
                seus clientes com outros usuários do EssencialPet.
              </p>

              <h2>5. Segurança dos Dados</h2>
              <p>Implementamos medidas de segurança técnicas e organizacionais:</p>
              <ul>
                <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
                <li>Criptografia de dados sensíveis em repouso</li>
                <li>Acesso restrito por autenticação segura</li>
                <li>Backups regulares e redundância</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Treinamento da equipe em proteção de dados</li>
              </ul>

              <h2>6. Retenção de Dados</h2>
              <ul>
                <li><strong>Conta ativa:</strong> Enquanto você utilizar o serviço</li>
                <li><strong>Após cancelamento:</strong> 30 dias para exportação, depois exclusão</li>
                <li><strong>Dados fiscais:</strong> 5 anos (obrigação legal)</li>
                <li><strong>Logs de segurança:</strong> 6 meses</li>
              </ul>

              <h2>7. Seus Direitos</h2>
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul>
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e quais são</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</li>
                <li><strong>Anonimização ou exclusão:</strong> Solicitar remoção de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Se opor a tratamentos baseados em legítimo interesse</li>
              </ul>
              <p>
                Para exercer seus direitos, envie email para{' '}
                <a href="mailto:essencialcomunicacaoeinfo@gmail.com" className="text-primary-600">
                  essencialcomunicacaoeinfo@gmail.com
                </a>{' '}
                com o assunto "Direitos LGPD".
              </p>

              <h2>8. Cookies e Tecnologias</h2>
              <p>Utilizamos cookies para:</p>
              <ul>
                <li><strong>Essenciais:</strong> Funcionamento do sistema (login, sessão)</li>
                <li><strong>Analíticos:</strong> Entender como você usa o produto</li>
                <li><strong>Marketing:</strong> Melhorar nossas campanhas (com consentimento)</li>
              </ul>
              <p>
                Você pode gerenciar cookies nas configurações do seu navegador.
              </p>

              <h2>9. Transferência Internacional</h2>
              <p>
                Nossos servidores estão localizados no Brasil e nos Estados Unidos (para redundância). 
                Quando dados são transferidos internacionalmente, garantimos proteção adequada através 
                de cláusulas contratuais padrão.
              </p>

              <h2>10. Menores de Idade</h2>
              <p>
                O EssencialPet é destinado a empresas e profissionais. Não coletamos intencionalmente 
                dados de menores de 18 anos. Se você acredita que coletamos dados de um menor, 
                entre em contato imediatamente.
              </p>

              <h2>11. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política periodicamente. Alterações significativas serão 
                comunicadas por email com 30 dias de antecedência. A data de atualização no topo 
                do documento sempre refletirá a versão mais recente.
              </p>

              <h2>12. Contato e Encarregado de Dados (DPO)</h2>
              <p>
                Para questões sobre privacidade e proteção de dados:
              </p>
              <ul>
                <li><strong>Empresa:</strong> Essencial Comunicação</li>
                <li><strong>CNPJ:</strong> 22.185.544/0001-08</li>
                <li><strong>Responsável:</strong> Aldair Antonio Dias Jr</li>
                <li><strong>Email:</strong> essencialcomunicacaoeinfo@gmail.com</li>
                <li><strong>WhatsApp:</strong> (24) 98137-5213</li>
                <li><strong>Endereço:</strong> Petrópolis - RJ</li>
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Documento atualizado em 11 de fevereiro de 2026
                </p>
                <a 
                  href="mailto:essencialcomunicacaoeinfo@gmail.com?subject=Direitos LGPD - Solicitação"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Exercer meus direitos
                </a>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/termos" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Termos de Uso →
            </Link>
            <Link 
              to="/suporte" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Suporte →
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Contato →
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

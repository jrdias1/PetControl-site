import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { FileText, ArrowLeft, Mail } from 'lucide-react'

export default function Termos() {
  return (
    <>
      <SEO 
        title="Termos de Uso"
        description="Termos de Uso do EssencialPet. Leia os termos e condições para utilização do nosso sistema de pós-venda para pet shops."
        canonical="/termos"
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
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-dark-900">
                  Termos de Uso
                </h1>
                <p className="text-gray-500 text-sm">Última atualização: 11 de fevereiro de 2026</p>
              </div>
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
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou utilizar o EssencialPet ("Serviço"), você concorda em cumprir e estar vinculado a 
                estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar 
                o Serviço.
              </p>
              <p>
                O EssencialPet é um sistema de automação de pós-venda para pet shops, clínicas veterinárias 
                e estabelecimentos do ramo pet, desenvolvido e operado pela Essencial Comunicação 
                (CNPJ: 22.185.544/0001-08).
              </p>

              <h2>2. Descrição do Serviço</h2>
              <p>O EssencialPet oferece:</p>
              <ul>
                <li>Gestão de clientes e pets</li>
                <li>Cadastro e controle de produtos com tempo de eficácia</li>
                <li>Envio automatizado de lembretes de recompra via WhatsApp</li>
                <li>Dashboard com métricas e relatórios</li>
                <li>Histórico de vendas e agendamentos</li>
              </ul>

              <h2>3. Cadastro e Conta</h2>
              <p>
                Para utilizar o Serviço, você deve criar uma conta fornecendo informações precisas e completas. 
                Você é responsável por manter a confidencialidade de sua senha e por todas as atividades 
                realizadas em sua conta.
              </p>
              <p>
                Você concorda em notificar imediatamente a Essencial Comunicação sobre qualquer uso não 
                autorizado de sua conta.
              </p>

              <h2>4. Planos e Pagamento</h2>
              <p>
                O EssencialPet oferece diferentes planos de assinatura. Os valores e recursos de cada plano 
                estão disponíveis em nossa <Link to="/preco" className="text-primary-600 hover:underline">página de preços</Link>.
              </p>
              <ul>
                <li><strong>Período de teste:</strong> 3 dias gratuitos para novos usuários</li>
                <li><strong>Cobrança:</strong> Mensal ou anual, conforme o plano escolhido</li>
                <li><strong>Renovação:</strong> Automática ao final de cada período</li>
                <li><strong>Cancelamento:</strong> Pode ser feito a qualquer momento, sem fidelidade</li>
              </ul>

              <h2>5. Uso Aceitável</h2>
              <p>Você concorda em não utilizar o Serviço para:</p>
              <ul>
                <li>Enviar spam ou mensagens não solicitadas em massa</li>
                <li>Violar leis ou regulamentos aplicáveis</li>
                <li>Transmitir vírus ou códigos maliciosos</li>
                <li>Tentar acessar áreas não autorizadas do sistema</li>
                <li>Revender ou sublicenciar o Serviço sem autorização</li>
                <li>Utilizar para fins diferentes da gestão de negócios pet</li>
              </ul>

              <h2>6. Integração com WhatsApp</h2>
              <p>
                O EssencialPet utiliza a API oficial do WhatsApp Business para envio de mensagens. 
                Você é responsável por:
              </p>
              <ul>
                <li>Obter consentimento dos seus clientes para receber mensagens</li>
                <li>Cumprir as políticas do WhatsApp Business</li>
                <li>Manter seus dados de integração atualizados</li>
              </ul>
              <p>
                Não nos responsabilizamos por bloqueios ou restrições impostas pelo WhatsApp devido ao 
                uso inadequado por parte do usuário.
              </p>

              <h2>7. Propriedade Intelectual</h2>
              <p>
                O EssencialPet, incluindo sua marca, logotipo, design, código-fonte e funcionalidades, são 
                propriedade exclusiva da Essencial Comunicação. É proibida a cópia, modificação, distribuição 
                ou engenharia reversa do Serviço.
              </p>

              <h2>8. Dados e Privacidade</h2>
              <p>
                O tratamento de dados pessoais é regido por nossa <Link to="/privacidade" className="text-primary-600 hover:underline">Política de Privacidade</Link>, 
                que faz parte integrante destes Termos. Recomendamos a leitura atenta desse documento.
              </p>

              <h2>9. Disponibilidade do Serviço</h2>
              <p>
                Nos esforçamos para manter o Serviço disponível 24/7, mas não garantimos disponibilidade 
                ininterrupta. Podemos realizar manutenções programadas, preferencialmente em horários de 
                menor uso.
              </p>

              <h2>10. Limitação de Responsabilidade</h2>
              <p>
                O EssencialPet é fornecido "como está". Não garantimos que o Serviço atenderá todas as suas 
                necessidades específicas ou que operará livre de erros. Nossa responsabilidade máxima será 
                limitada ao valor pago pelo usuário nos últimos 12 meses.
              </p>

              <h2>11. Rescisão</h2>
              <p>
                Podemos suspender ou encerrar seu acesso ao Serviço a qualquer momento, com ou sem motivo, 
                mediante aviso prévio de 30 dias. Em caso de violação destes Termos, o encerramento pode 
                ser imediato.
              </p>
              <p>
                Após o encerramento, você poderá exportar seus dados por até 30 dias, após os quais serão 
                permanentemente excluídos.
              </p>

              <h2>12. Alterações nos Termos</h2>
              <p>
                Podemos atualizar estes Termos periodicamente. Alterações significativas serão comunicadas 
                por email com antecedência mínima de 30 dias. O uso continuado do Serviço após as alterações 
                constitui aceitação dos novos termos.
              </p>

              <h2>13. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro 
                da comarca de Petrópolis - RJ para dirimir quaisquer controvérsias.
              </p>

              <h2>14. Contato</h2>
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <ul>
                <li><strong>Empresa:</strong> Essencial Comunicação</li>
                <li><strong>CNPJ:</strong> 22.185.544/0001-08</li>
                <li><strong>Email:</strong> essencialcomunicacaoeinfo@gmail.com</li>
                <li><strong>WhatsApp:</strong> (24) 98137-5213</li>
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Documento atualizado em 11 de fevereiro de 2026
                </p>
                <a 
                  href="mailto:essencialcomunicacaoeinfo@gmail.com?subject=Dúvida sobre Termos de Uso"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Enviar dúvida
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

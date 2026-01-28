import React, { useState, useEffect } from 'react';
import { Code, Eye, Layout, Hash, Type, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Título
    {
      title: "Tutorial Base de HTML",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="mb-8">
            <Code className="w-32 h-32 text-indigo-600 mx-auto mb-6" />
          </div>
          <h1 className="text-7xl font-bold text-indigo-900 mb-6">
            Tutorial Base de HTML
          </h1>
          <p className="text-3xl text-indigo-700 mb-8">
            Aprenda os fundamentos com exemplos práticos
          </p>
          <div className="flex gap-6 text-xl text-gray-600">
            <span>📦 DIV</span>
            <span>🔖 # ID</span>
            <span>🏷️ . CLASS</span>
            <span>🎨 CSS</span>
            <span>📐 Frames</span>
          </div>
        </div>
      )
    },

    // Slide 2 - O que é uma DIV
    {
      title: "O que é uma DIV?",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <Layout className="w-16 h-16 text-indigo-600" />
            <h2 className="text-5xl font-bold text-gray-900">
              O que é uma DIV?
            </h2>
          </div>
          
          <p className="text-2xl text-gray-700 mb-8">
            <code className="bg-indigo-100 px-3 py-2 rounded text-indigo-800 text-3xl">
              &lt;div&gt;
            </code>{' '}
            significa <strong>"division"</strong> (divisão)
          </p>

          <div className="bg-indigo-50 p-8 rounded-2xl mb-8 border-4 border-indigo-200">
            <p className="text-2xl text-gray-800 mb-6">
              <strong>Pense na DIV como uma caixa invisível</strong> que você 
              usa para organizar e estruturar seu conteúdo.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-indigo-900 mb-4 text-2xl">Código:</h3>
                <pre className="text-lg text-gray-800">
{`<div>
  <p>Caixa 1</p>
</div>

<div>
  <p>Caixa 2</p>
</div>`}
                </pre>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-200 border-4 border-blue-400 p-6 rounded-xl">
                  <p className="text-gray-900 text-xl font-bold">Caixa 1</p>
                </div>
                <div className="bg-green-200 border-4 border-green-400 p-6 rounded-xl">
                  <p className="text-gray-900 text-xl font-bold">Caixa 2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 text-white p-6 rounded-xl text-xl">
            <p>
              💡 <strong>Dica:</strong> DIVs são como blocos de LEGO - você 
              pode empilhar, organizar e combinar!
            </p>
          </div>
        </div>
      )
    },

    // Slide 3 - ID
    {
      title: "# ID - Identificador Único",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <Hash className="w-16 h-16 text-purple-600" />
            <h2 className="text-5xl font-bold text-gray-900">
              # ID - O Identificador Único
            </h2>
          </div>

          <p className="text-2xl text-gray-700 mb-8">
            O <code className="bg-purple-100 px-3 py-2 rounded text-purple-800 text-2xl">id</code>{' '}
            é como o <strong>CPF</strong> de um elemento - único e exclusivo!
          </p>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <div className="bg-purple-50 p-6 rounded-xl mb-6 border-4 border-purple-200">
                <h3 className="font-bold text-purple-900 mb-4 text-2xl">Regras do ID:</h3>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li>✅ Só pode existir <strong>UMA VEZ</strong></li>
                  <li>✅ Para elementos únicos</li>
                  <li>✅ No CSS, use <code className="bg-purple-200 px-2 py-1 rounded">#</code> antes do nome</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300">
                <h3 className="font-bold text-purple-900 mb-3 text-xl">HTML:</h3>
                <pre className="text-base text-gray-800 mb-4">
{`<div id="cabecalho">
  <h1>Meu Site</h1>
</div>`}
                </pre>

                <h3 className="font-bold text-purple-900 mb-3 text-xl">CSS:</h3>
                <pre className="text-base text-gray-800">
{`#cabecalho {
  background: blue;
  color: white;
}`}
                </pre>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl">
                <h3 className="font-bold text-2xl mb-2">Meu Site</h3>
                <p className="text-lg">(id="cabecalho")</p>
              </div>
              
              <div className="bg-purple-600 text-white p-6 rounded-xl text-xl">
                <p>
                  ⚠️ <strong>Lembre-se:</strong> Não repita IDs! Cada ID só 
                  aparece uma vez.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - CLASS
    {
      title: ". CLASS - Grupo Reutilizável",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <Type className="w-16 h-16 text-emerald-600" />
            <h2 className="text-5xl font-bold text-gray-900">
              . CLASS - O Grupo Reutilizável
            </h2>
          </div>

          <p className="text-2xl text-gray-700 mb-8">
            A <code className="bg-emerald-100 px-3 py-2 rounded text-emerald-800 text-2xl">class</code>{' '}
            é como uma <strong>etiqueta</strong> que você pode usar várias vezes!
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="bg-emerald-50 p-6 rounded-xl mb-6 border-4 border-emerald-200">
                <h3 className="font-bold text-emerald-900 mb-4 text-2xl">Vantagens:</h3>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li>✅ Use em <strong>MÚLTIPLOS</strong> elementos</li>
                  <li>✅ Elemento pode ter várias classes</li>
                  <li>✅ No CSS, use <code className="bg-emerald-200 px-2 py-1 rounded">.</code> antes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300">
                <h3 className="font-bold text-emerald-900 mb-3 text-xl">HTML:</h3>
                <pre className="text-base text-gray-800 mb-4">
{`<div class="card">
  Produto 1
</div>
<div class="card">
  Produto 2
</div>
<div class="card destaque">
  Produto 3
</div>`}
                </pre>

                <h3 className="font-bold text-emerald-900 mb-3 text-xl">CSS:</h3>
                <pre className="text-base text-gray-800">
{`.card {
  border: 2px solid #ccc;
  padding: 15px;
}
.destaque {
  background: gold;
}`}
                </pre>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="border-2 border-gray-300 p-6 rounded-xl bg-white shadow">
                <p className="text-xl font-bold">Produto 1</p>
                <p className="text-sm text-gray-600">(class="card")</p>
              </div>
              <div className="border-2 border-gray-300 p-6 rounded-xl bg-white shadow">
                <p className="text-xl font-bold">Produto 2</p>
                <p className="text-sm text-gray-600">(class="card")</p>
              </div>
              <div className="border-2 border-gray-300 p-6 rounded-xl bg-yellow-300 shadow-lg">
                <p className="text-xl font-bold">Produto 3</p>
                <p className="text-sm text-gray-600">(class="card destaque")</p>
              </div>

              <div className="bg-emerald-600 text-white p-4 rounded-xl text-lg mt-4">
                <p>✨ Use classes para tudo que se repete!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5 - CSS
    {
      title: "CSS - O Estilista",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <Code className="w-16 h-16 text-pink-600" />
            <h2 className="text-5xl font-bold text-gray-900">
              CSS - O Estilista das Páginas
            </h2>
          </div>

          <p className="text-2xl text-gray-700 mb-8">
            <strong>CSS</strong> deixa suas páginas bonitas e é mais prático que decorar!
          </p>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="bg-red-50 p-6 rounded-xl border-4 border-red-300">
              <h3 className="font-bold text-red-900 mb-4 text-2xl">❌ Jeito ruim:</h3>
              <pre className="text-base text-gray-800">
{`<div style="color: blue; 
     font-size: 20px;">
  Texto 1
</div>
<div style="color: blue; 
     font-size: 20px;">
  Texto 2
</div>
<div style="color: blue; 
     font-size: 20px;">
  Texto 3
</div>`}
              </pre>
              <p className="text-red-700 mt-4 text-lg">Repetitivo e difícil de manter!</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-4 border-green-300">
              <h3 className="font-bold text-green-900 mb-4 text-2xl">✅ Jeito bom:</h3>
              <pre className="text-base text-gray-800">
{`<style>
  .destaque {
    color: blue;
    font-size: 20px;
  }
</style>

<div class="destaque">
  Texto 1
</div>
<div class="destaque">
  Texto 2
</div>
<div class="destaque">
  Texto 3
</div>`}
              </pre>
              <p className="text-green-700 mt-4 text-lg">Limpo e fácil de mudar!</p>
            </div>
          </div>

          <div className="bg-pink-600 text-white p-6 rounded-xl text-xl">
            <p>
              🎨 <strong>Lembre-se:</strong> Não precisa decorar tudo! Use 
              referências e aprenda na prática.
            </p>
          </div>
        </div>
      )
    },

    // Slide 6 - Frames
    {
      title: "Frames - Estrutura da Página",
      content: (
        <div className="h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <Layout className="w-16 h-16 text-orange-600" />
            <h2 className="text-5xl font-bold text-gray-900">
              Frames - Estruturando sua Página
            </h2>
          </div>

          <p className="text-2xl text-gray-700 mb-8">
            "Frame" são as <strong>seções estruturais</strong> de uma página web
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300">
              <h3 className="font-bold text-orange-900 mb-4 text-2xl">Código:</h3>
              <pre className="text-sm text-gray-800">
{`<div id="topo">
  Cabeçalho
</div>

<div id="menu">
  Navegação
</div>

<div class="conteudo">
  Conteúdo principal
</div>

<div id="rodape">
  Rodapé
</div>`}
              </pre>
            </div>
            
            <div className="border-4 border-gray-400 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="font-bold text-xl">Cabeçalho do Site</h3>
                <p className="text-sm">Frame: TOPO</p>
              </div>
              
              <div className="bg-gray-200 p-4 border-b-2 border-gray-400">
                <p className="font-bold">Home | Sobre | Contato</p>
                <p className="text-xs text-gray-700">Frame: MENU</p>
              </div>
              
              <div className="p-6 bg-white min-h-[200px]">
                <h3 className="font-bold text-lg">Conteúdo Principal</h3>
                <p className="text-gray-600">Aqui vai o conteúdo...</p>
                <p className="text-xs text-gray-500 mt-2">Frame: CONTEÚDO</p>
              </div>
              
              <div className="bg-gray-800 text-white p-4 text-center">
                <p>© 2026</p>
                <p className="text-xs">Frame: RODAPÉ</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-600 text-white p-6 rounded-xl text-xl mt-6">
            <p>
              📐 <strong>Dica:</strong> Use IDs para frames únicos e classes 
              para elementos repetidos!
            </p>
          </div>
        </div>
      )
    },

    // Slide 7 - Resumo
    {
      title: "Resumo",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-6xl font-bold mb-12 text-center text-indigo-900">
            📚 Resumo Rápido
          </h2>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold mb-4 text-3xl">🔷 DIV</h3>
              <p className="text-xl">Caixa invisível para organizar conteúdo</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold mb-4 text-3xl"># ID</h3>
              <p className="text-xl mb-2">Identificador único</p>
              <code className="text-lg bg-black/30 px-3 py-2 rounded block">
                #cabecalho {'{ ... }'}
              </code>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold mb-4 text-3xl">. CLASS</h3>
              <p className="text-xl mb-2">Grupo reutilizável</p>
              <code className="text-lg bg-black/30 px-3 py-2 rounded block">
                .botao {'{ ... }'}
              </code>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-bold mb-4 text-3xl">🎨 CSS</h3>
              <p className="text-xl">Estiliza tudo - mais prático que decorar!</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-3xl font-bold">
              ✨ Pratique, experimente e divirta-se! 🚀
            </p>
            <p className="text-xl mt-4">
              Ninguém decora tudo - aprenda fazendo!
            </p>
          </div>
        </div>
      )
    },

    // Slide 8 - Exemplo Visual de DIVs
    {
      title: "DIVs na Prática",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8 text-center text-gray-900">
            🎨 Como as DIVs Estruturam um Site
          </h2>
          
          <div className="grid grid-cols-2 gap-8 h-[70vh]">
            {/* Lado Esquerdo - Estrutura com DIVs */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                📦 Estrutura (com DIVs)
              </h3>
              <div className="flex-1 border-4 border-gray-400 rounded-xl p-4 bg-gray-50 overflow-hidden">
                {/* Cabeçalho */}
                <div className="bg-gray-300 border-2 border-gray-400 p-4 rounded-lg mb-3 flex items-center justify-center">
                  <span className="font-mono text-gray-700 font-bold text-lg">&lt;div id="cabecalho"&gt;</span>
                </div>

                {/* Menu */}
                <div className="bg-gray-300 border-2 border-gray-400 p-3 rounded-lg mb-3 flex items-center justify-center">
                  <span className="font-mono text-gray-700 font-bold">&lt;div id="menu"&gt;</span>
                </div>

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="col-span-2 bg-gray-300 border-2 border-gray-400 p-6 rounded-lg flex items-center justify-center min-h-[200px]">
                    <span className="font-mono text-gray-700 font-bold">&lt;div class="conteudo"&gt;</span>
                  </div>
                  <div className="bg-gray-300 border-2 border-gray-400 p-6 rounded-lg flex items-center justify-center">
                    <span className="font-mono text-gray-700 font-bold text-sm">&lt;div class="sidebar"&gt;</span>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-300 border-2 border-gray-400 p-3 rounded-lg flex items-center justify-center">
                    <span className="font-mono text-gray-700 text-xs">&lt;div class="card"&gt;</span>
                  </div>
                  <div className="bg-gray-300 border-2 border-gray-400 p-3 rounded-lg flex items-center justify-center">
                    <span className="font-mono text-gray-700 text-xs">&lt;div class="card"&gt;</span>
                  </div>
                  <div className="bg-gray-300 border-2 border-gray-400 p-3 rounded-lg flex items-center justify-center">
                    <span className="font-mono text-gray-700 text-xs">&lt;div class="card"&gt;</span>
                  </div>
                </div>

                {/* Rodapé */}
                <div className="bg-gray-300 border-2 border-gray-400 p-4 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-gray-700 font-bold">&lt;div id="rodape"&gt;</span>
                </div>
              </div>
            </div>

            {/* Lado Direito - Site Colorido */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
                🎨 Site Final (com CSS)
              </h3>
              <div className="flex-1 border-4 border-indigo-400 rounded-xl overflow-hidden shadow-2xl">
                {/* Cabeçalho */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
                  <h1 className="text-2xl font-bold">🌟 Meu Site Incrível</h1>
                  <p className="text-sm">Bem-vindo ao meu portfólio</p>
                </div>

                {/* Menu */}
                <div className="bg-indigo-500 text-white px-4 py-2 flex gap-4 text-sm">
                  <span className="hover:underline cursor-pointer">🏠 Home</span>
                  <span className="hover:underline cursor-pointer">📝 Sobre</span>
                  <span className="hover:underline cursor-pointer">💼 Projetos</span>
                  <span className="hover:underline cursor-pointer">📧 Contato</span>
                </div>

                {/* Conteúdo Principal */}
                <div className="grid grid-cols-3 gap-3 p-3">
                  <div className="col-span-2 bg-white p-4 rounded-lg border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Conteúdo Principal</h2>
                    <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg border border-blue-300">
                    <h3 className="text-sm font-bold text-blue-800 mb-2">📌 Sidebar</h3>
                    <p className="text-xs text-blue-700">Links úteis</p>
                    <p className="text-xs text-blue-700 mt-1">Categorias</p>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-2 px-3 pb-3">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-3 rounded-lg shadow">
                    <p className="text-xs font-bold">🎨 Design</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-3 rounded-lg shadow">
                    <p className="text-xs font-bold">💻 Código</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-3 rounded-lg shadow">
                    <p className="text-xs font-bold">🚀 Deploy</p>
                  </div>
                </div>

                {/* Rodapé */}
                <div className="bg-gray-800 text-white p-3 text-center">
                  <p className="text-xs">© 2026 - Feito com ❤️ e HTML</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 text-white p-4 rounded-xl text-center mt-4">
            <p className="text-lg font-bold">
              📦 Esquerda: Estrutura (DIVs) → 🎨 Direita: Visual Final (DIVs + CSS)
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Adicionar suporte para navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Slide Container */}
      <div className="w-full h-full bg-white relative">
        {/* Slide Content */}
        <div className="h-full p-16 overflow-hidden">
          {slides[currentSlide].content}
        </div>

        {/* Slide Number */}
        <div className="absolute bottom-8 right-8 bg-gray-800 text-white px-4 py-2 rounded-lg text-lg font-bold">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-indigo-600 w-8'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
import LogoImg from '../../assets/icons/logo.svg';
import DocumnetImg from '../../assets/icons/icon-document.svg';
import FolderImg from '../../assets/icons/icon-folder.svg'
import UploadImg from '../../assets/icons/icon-upload.svg';

type ToolBarProps = {
  setSpaceUsed: React.Dispatch<React.SetStateAction<number>>
}

export function ToolBar({ setSpaceUsed }: ToolBarProps) {


  const features = [
    {
      id: 1,
      icon: DocumnetImg,
      alt: 'Document button',
    },
    {
      id: 2,
      icon: FolderImg,
      alt: 'Folder button',
    },
    {
      id: 3,
      icon: UploadImg,
      alt: 'Upload button',
    },
  ]

  return (
    <section className='bg-(--blue-850) flex flex-col gap-5 py-8 px-5 md:w-72 w-full max-w-[90vw]  rounded-l-lg rounded-br-lg rounded-tr-[100px]'>
      <div>
        <img src={LogoImg} alt="Flyo Company Logo" />
      </div>
      <div className='flex gap-4'>
        {features.map((btn) => (
          <button key={btn.id} className={`bg-(--blue-950) hover:scale-95 h-10 w-10 p-2.5 rounded-lg ${btn.id === 1 && 'px-3'} cursor-pointer`}>
            <img src={btn.icon} alt={btn.alt} />
          </button>
        ))}
      </div>
      <input
        id='SpaceLeftInput'
        type="number"
        min={0}
        max={1000}
        placeholder='Enter Free Space'
        className='placeholder:text-white text-white outline-none bg-(--blue-950) py-2 px-4 rounded-lg'
        onChange={(e) => {
          const value = Math.min(1000, Math.max(0, Number(e.target.value)))
          setSpaceUsed(value)
        }} />
    </section>
  )
}
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-action';

export default function TestPage() {

  const { template } = useTypedSelector(state => state.template)

    const  {fetchTemplate} = useActions();
    
    useEffect(() => {
        fetchTemplate();
    }, [])

    function AddTemplateToEditor() {
        template.map((templateGroup) =>
            templateGroup.TemplateGroup.map((item) => {
                if (item.isActive) {
                    console.log(templateGroup.id, item.id);
                }
            })
        );
    }

    function setTemplateItemIsActiveFiled(itemId: number, groupId: number)  {

      const updatedTemplate = template.map((item) => {
          if (item.id === itemId) {
              item.TemplateGroup = item.TemplateGroup.map((group) => {
                  if (group.id === groupId) {
                      return { ...group, isActive: !group.isActive };
                  }
                  return group;
              });
          }
          return item;
      });

      console.log(updatedTemplate);
      console.log(template)
    }

    

  return (
      <>
          <div>test-page---------------ssss</div>
          <button  onClick={() => setTemplateItemIsActiveFiled(1,2)}>egor</button>
      </>
  );
}

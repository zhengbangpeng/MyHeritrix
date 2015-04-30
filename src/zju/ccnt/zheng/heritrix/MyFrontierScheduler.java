package zju.ccnt.zheng.heritrix;

import java.util.ArrayList;
import java.util.List;

import org.archive.crawler.datamodel.CandidateURI;
import org.archive.crawler.postprocessor.FrontierScheduler;

public class MyFrontierScheduler extends FrontierScheduler {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MyFrontierScheduler(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}
	
	
	protected void schedule(CandidateURI caUri) {
		
		String uri=caUri.toString();
        
        
        List<String> suffixList=new ArrayList();
        suffixList.add(".txt");
        suffixList.add(".png");
        suffixList.add(".exe");
        suffixList.add(".jpg");
        suffixList.add(".wmv");
        suffixList.add(".css");
        suffixList.add(".ico");
        suffixList.add(".swf");
        suffixList.add(".gif");
        suffixList.add(".pdf");
        suffixList.add(".gz");
        suffixList.add(".rar");
        suffixList.add(".zip");
        suffixList.add(".doc");
        suffixList.add(".avi");
        
        for(String suffi:suffixList){
        	if(uri.contains(suffi)) return;
        }
        System.out.println(uri);
        getController().getFrontier().schedule(caUri);
        
    }

}

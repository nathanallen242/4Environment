import React from 'react';

const Sidebar = ({ selectedFeature }) => {
  if (!selectedFeature) return null;

  // Helper function to format numbers with commas
  const formatNumber = num => num ? Intl.NumberFormat().format(num) : "N/A";

  // Inline styles
  const styles = {
    sidebar: {
      position: 'fixed',
      top: '20px',
      left: '20px',
      bottom: '20px',
      width: '350px',
      height: '100vh',
      maxHeight: 'calc(100vh - 40px)',
      overflow: 'hidden', // Changed to hide the scrollbar
      backgroundColor: 'white',
      color: '#ecf0f1',
      padding: '0', // Padding removed here and moved to contentWrapper for scrollbar workaround
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      zIndex: 1000,
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    contentWrapper: {
      padding: '20px',
      height: '100%',
      overflowY: 'scroll', // Scrollbar re-enabled here, within the content wrapper
      marginRight: '-17px', // Adjust based on the scrollbar width to hide it
      boxSizing: 'border-box',
    },
    title: {
      color: 'green',
      borderBottom: '1px solid #ecf0f1',
      paddingBottom: '10px',
    },
    sectionTitle: {
      color: 'Green',
      marginTop: '20px',
    },
    paragraph: {
      lineHeight: '1.3',
      marginBottom: '10px',
      color: "black",
    },
    horizontalLine: {
      height: '2px',
      backgroundColor: '#ecf0f1',
      border: 'none',
      margin: '20px 0',
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.contentWrapper}> {/* Wrapper added for content */}
        <h2 style={styles.title}>Detailed Area Information</h2>
        <p style={styles.paragraph}><strong>Location:</strong> {selectedFeature.County}, {selectedFeature.State}, Tract {selectedFeature.CensusTract}</p>
        <p style={styles.paragraph}><strong>Urban Tract:</strong> {selectedFeature.Urban === '1' ? 'Yes' : 'No'}</p>
        <p style={styles.paragraph}><strong>Population (2010):</strong> {formatNumber(selectedFeature.POP2010)}</p>
        <p style={styles.paragraph}><strong>Occupied Housing Units (2010):</strong> {formatNumber(selectedFeature.OHU2010)}</p>
        
        {/* Additional Details */}
        <h3 style={styles.sectionTitle}>Economic Indicators</h3>
        <p style={styles.paragraph}><strong>Poverty Rate:</strong> {selectedFeature.PovertyRate}%</p>
        <p style={styles.paragraph}><strong>Median Family Income:</strong> ${formatNumber(selectedFeature.MedianFamilyIncome)}</p>
        <p style={styles.paragraph}><strong>Low Income Tracts:</strong> {selectedFeature.LowIncomeTracts ? 'Yes' : 'No'}</p>
        <p style={styles.paragraph}><strong>SNAP Benefits Housing Units:</strong> {formatNumber(selectedFeature.TractSNAP)}</p>

        <h3 style={styles.sectionTitle}>Access to Food</h3>
        <p style={styles.paragraph}><strong>Food Desert (1 & 10 mile):</strong> {selectedFeature.LILATracts_1And10 ? 'Yes' : 'No'}</p>
        <p style={styles.paragraph}><strong>Low Vehicle Access:</strong> {selectedFeature.HUNVFlag ? 'Yes' : 'No'}</p>

        <h3 style={styles.sectionTitle}>Demographics</h3>
        <p style={styles.paragraph}><strong>Children (0-17):</strong> {formatNumber(selectedFeature.TractKids)}</p>
        <p style={styles.paragraph}><strong>Seniors (65+):</strong> {formatNumber(selectedFeature.TractSeniors)}</p>
        <p style={styles.paragraph}><strong>Black or African American:</strong> {formatNumber(selectedFeature.TractBlack)}</p>
        <p style={styles.paragraph}><strong>Hispanic or Latino:</strong> {formatNumber(selectedFeature.TractHispanic)}</p>
        <p style={styles.paragraph}><strong>Asian:</strong> {formatNumber(selectedFeature.TractAsian)}</p>
        
        {/* Horizontal line added after the final demographic entry */}
        <div style={styles.horizontalLine}></div>

        <h4 style={{textAlign: 'right', color:'blue'}}>
          <a href="https://www.ers.usda.gov/data-products/food-access-research-atlas/documentation/" 
             style={{color: 'blue'}} // Ensures the link is blue
             target="_blank" // Opens link in a new tab
             rel="noopener noreferrer" // Security measure for opening links in new tabs
          >
            What do these terms mean?
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Sidebar;

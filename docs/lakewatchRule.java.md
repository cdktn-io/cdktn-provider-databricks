# `lakewatchRule` Submodule <a name="`lakewatchRule` Submodule" id="@cdktn/provider-databricks.lakewatchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchRule <a name="LakewatchRule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule databricks_lakewatch_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRule;

LakewatchRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .fidelity(java.lang.String)
    .output(LakewatchRuleOutput)
    .ruleName(java.lang.String)
    .schedule(LakewatchRuleSchedule)
    .schemaName(java.lang.String)
    .severity(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .batch(LakewatchRuleBatch)
//  .category(java.lang.String)
//  .contentResourceId(java.lang.String)
//  .deduplication(java.lang.String)
//  .deduplicationTimeWindow(java.lang.String)
//  .description(java.lang.String)
//  .mitre(IResolvable|java.util.List<LakewatchRuleMitre>)
//  .objective(java.lang.String)
//  .providerConfig(LakewatchRuleProviderConfig)
//  .references(java.util.List<java.lang.String>)
//  .runAsPrincipal(java.lang.String)
//  .runbook(java.lang.String)
//  .suppressUntilTime(java.lang.String)
//  .timerange(LakewatchRuleTimerange)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.fidelity">fidelity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.contentResourceId">contentResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplication">deduplication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplicationTimeWindow">deduplicationTimeWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.mitre">mitre</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.objective">objective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.references">references</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runbook">runbook</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.suppressUntilTime">suppressUntilTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.catalogName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}.

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.fidelity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.output"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}.

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.batch"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}.

---

##### `contentResourceId`<sup>Optional</sup> <a name="contentResourceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.contentResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}.

---

##### `deduplication`<sup>Optional</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplication"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}.

---

##### `deduplicationTimeWindow`<sup>Optional</sup> <a name="deduplicationTimeWindow" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.deduplicationTimeWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}.

---

##### `mitre`<sup>Optional</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.mitre"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.objective"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}.

---

##### `references`<sup>Optional</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.references"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}.

---

##### `runAsPrincipal`<sup>Optional</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runAsPrincipal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}.

---

##### `runbook`<sup>Optional</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.runbook"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}.

---

##### `suppressUntilTime`<sup>Optional</sup> <a name="suppressUntilTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.suppressUntilTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}.

---

##### `timerange`<sup>Optional</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.Initializer.parameter.timerange"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre">putMitre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange">putTimerange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetContentResourceId">resetContentResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplication">resetDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplicationTimeWindow">resetDeduplicationTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetMitre">resetMitre</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetObjective">resetObjective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetReferences">resetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunAsPrincipal">resetRunAsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunbook">resetRunbook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetSuppressUntilTime">resetSuppressUntilTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetTimerange">resetTimerange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBatch` <a name="putBatch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch"></a>

```java
public void putBatch(LakewatchRuleBatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

---

##### `putMitre` <a name="putMitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre"></a>

```java
public void putMitre(IResolvable|java.util.List<LakewatchRuleMitre> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putMitre.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput"></a>

```java
public void putOutput(LakewatchRuleOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig"></a>

```java
public void putProviderConfig(LakewatchRuleProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule"></a>

```java
public void putSchedule(LakewatchRuleSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

---

##### `putTimerange` <a name="putTimerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange"></a>

```java
public void putTimerange(LakewatchRuleTimerange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.putTimerange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetBatch` <a name="resetBatch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetBatch"></a>

```java
public void resetBatch()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetContentResourceId` <a name="resetContentResourceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetContentResourceId"></a>

```java
public void resetContentResourceId()
```

##### `resetDeduplication` <a name="resetDeduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplication"></a>

```java
public void resetDeduplication()
```

##### `resetDeduplicationTimeWindow` <a name="resetDeduplicationTimeWindow" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDeduplicationTimeWindow"></a>

```java
public void resetDeduplicationTimeWindow()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMitre` <a name="resetMitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetMitre"></a>

```java
public void resetMitre()
```

##### `resetObjective` <a name="resetObjective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetObjective"></a>

```java
public void resetObjective()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetReferences` <a name="resetReferences" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetReferences"></a>

```java
public void resetReferences()
```

##### `resetRunAsPrincipal` <a name="resetRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunAsPrincipal"></a>

```java
public void resetRunAsPrincipal()
```

##### `resetRunbook` <a name="resetRunbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetRunbook"></a>

```java
public void resetRunbook()
```

##### `resetSuppressUntilTime` <a name="resetSuppressUntilTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetSuppressUntilTime"></a>

```java
public void resetSuppressUntilTime()
```

##### `resetTimerange` <a name="resetTimerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.resetTimerange"></a>

```java
public void resetTimerange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRule;

LakewatchRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRule;

LakewatchRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRule;

LakewatchRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRule;

LakewatchRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LakewatchRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LakewatchRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LakewatchRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LakewatchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference">LakewatchRuleBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.computeWorkspaceId">computeWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference">LakewatchRuleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveCatalogName">effectiveCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRuleName">effectiveRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRunAsPrincipal">effectiveRunAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveSchemaName">effectiveSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitre">mitre</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList">LakewatchRuleMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.originalContentPack">originalContentPack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference">LakewatchRuleOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference">LakewatchRuleOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference">LakewatchRuleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference">LakewatchRuleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference">LakewatchRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference">LakewatchRuleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference">LakewatchRuleTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference">LakewatchRuleUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batchInput">batchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceIdInput">contentResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationInput">deduplicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindowInput">deduplicationTimeWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelityInput">fidelityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitreInput">mitreInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objectiveInput">objectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.outputInput">outputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.referencesInput">referencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipalInput">runAsPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbookInput">runbookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTimeInput">suppressUntilTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerangeInput">timerangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceId">contentResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplication">deduplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindow">deduplicationTimeWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelity">fidelity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.references">references</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbook">runbook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTime">suppressUntilTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batch"></a>

```java
public LakewatchRuleBatchOutputReference getBatch();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference">LakewatchRuleBatchOutputReference</a>

---

##### `computeWorkspaceId`<sup>Required</sup> <a name="computeWorkspaceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.computeWorkspaceId"></a>

```java
public java.lang.String getComputeWorkspaceId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createdBy"></a>

```java
public LakewatchRuleCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference">LakewatchRuleCreatedByOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveCatalogName`<sup>Required</sup> <a name="effectiveCatalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveCatalogName"></a>

```java
public java.lang.String getEffectiveCatalogName();
```

- *Type:* java.lang.String

---

##### `effectiveRuleName`<sup>Required</sup> <a name="effectiveRuleName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRuleName"></a>

```java
public java.lang.String getEffectiveRuleName();
```

- *Type:* java.lang.String

---

##### `effectiveRunAsPrincipal`<sup>Required</sup> <a name="effectiveRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveRunAsPrincipal"></a>

```java
public java.lang.String getEffectiveRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `effectiveSchemaName`<sup>Required</sup> <a name="effectiveSchemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.effectiveSchemaName"></a>

```java
public java.lang.String getEffectiveSchemaName();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `mitre`<sup>Required</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitre"></a>

```java
public LakewatchRuleMitreList getMitre();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList">LakewatchRuleMitreList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `originalContentPack`<sup>Required</sup> <a name="originalContentPack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.originalContentPack"></a>

```java
public LakewatchRuleOriginalContentPackOutputReference getOriginalContentPack();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference">LakewatchRuleOriginalContentPackOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.output"></a>

```java
public LakewatchRuleOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference">LakewatchRuleOutputOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.owner"></a>

```java
public LakewatchRuleOwnerOutputReference getOwner();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference">LakewatchRuleOwnerOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfig"></a>

```java
public LakewatchRuleProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference">LakewatchRuleProviderConfigOutputReference</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schedule"></a>

```java
public LakewatchRuleScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference">LakewatchRuleScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.status"></a>

```java
public LakewatchRuleStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference">LakewatchRuleStatusOutputReference</a>

---

##### `timerange`<sup>Required</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerange"></a>

```java
public LakewatchRuleTimerangeOutputReference getTimerange();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference">LakewatchRuleTimerangeOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updatedBy"></a>

```java
public LakewatchRuleUpdatedByOutputReference getUpdatedBy();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference">LakewatchRuleUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.batchInput"></a>

```java
public IResolvable|LakewatchRuleBatch getBatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `contentResourceIdInput`<sup>Optional</sup> <a name="contentResourceIdInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceIdInput"></a>

```java
public java.lang.String getContentResourceIdInput();
```

- *Type:* java.lang.String

---

##### `deduplicationInput`<sup>Optional</sup> <a name="deduplicationInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationInput"></a>

```java
public java.lang.String getDeduplicationInput();
```

- *Type:* java.lang.String

---

##### `deduplicationTimeWindowInput`<sup>Optional</sup> <a name="deduplicationTimeWindowInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindowInput"></a>

```java
public java.lang.String getDeduplicationTimeWindowInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fidelityInput`<sup>Optional</sup> <a name="fidelityInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelityInput"></a>

```java
public java.lang.String getFidelityInput();
```

- *Type:* java.lang.String

---

##### `mitreInput`<sup>Optional</sup> <a name="mitreInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.mitreInput"></a>

```java
public IResolvable|java.util.List<LakewatchRuleMitre> getMitreInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>>

---

##### `objectiveInput`<sup>Optional</sup> <a name="objectiveInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objectiveInput"></a>

```java
public java.lang.String getObjectiveInput();
```

- *Type:* java.lang.String

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.outputInput"></a>

```java
public IResolvable|LakewatchRuleOutput getOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.providerConfigInput"></a>

```java
public IResolvable|LakewatchRuleProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

---

##### `referencesInput`<sup>Optional</sup> <a name="referencesInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.referencesInput"></a>

```java
public java.util.List<java.lang.String> getReferencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `runAsPrincipalInput`<sup>Optional</sup> <a name="runAsPrincipalInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipalInput"></a>

```java
public java.lang.String getRunAsPrincipalInput();
```

- *Type:* java.lang.String

---

##### `runbookInput`<sup>Optional</sup> <a name="runbookInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbookInput"></a>

```java
public java.lang.String getRunbookInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.scheduleInput"></a>

```java
public IResolvable|LakewatchRuleSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressUntilTimeInput`<sup>Optional</sup> <a name="suppressUntilTimeInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTimeInput"></a>

```java
public java.lang.String getSuppressUntilTimeInput();
```

- *Type:* java.lang.String

---

##### `timerangeInput`<sup>Optional</sup> <a name="timerangeInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.timerangeInput"></a>

```java
public IResolvable|LakewatchRuleTimerange getTimerangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `contentResourceId`<sup>Required</sup> <a name="contentResourceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.contentResourceId"></a>

```java
public java.lang.String getContentResourceId();
```

- *Type:* java.lang.String

---

##### `deduplication`<sup>Required</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplication"></a>

```java
public java.lang.String getDeduplication();
```

- *Type:* java.lang.String

---

##### `deduplicationTimeWindow`<sup>Required</sup> <a name="deduplicationTimeWindow" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.deduplicationTimeWindow"></a>

```java
public java.lang.String getDeduplicationTimeWindow();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.fidelity"></a>

```java
public java.lang.String getFidelity();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.references"></a>

```java
public java.util.List<java.lang.String> getReferences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `runAsPrincipal`<sup>Required</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

---

##### `runbook`<sup>Required</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.runbook"></a>

```java
public java.lang.String getRunbook();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppressUntilTime`<sup>Required</sup> <a name="suppressUntilTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.suppressUntilTime"></a>

```java
public java.lang.String getSuppressUntilTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchRuleBatch <a name="LakewatchRuleBatch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatch;

LakewatchRuleBatch.builder()
//  .custom(LakewatchRuleBatchCustom)
//  .sql(LakewatchRuleBatchSql)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.custom"></a>

```java
public LakewatchRuleBatchCustom getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#custom LakewatchRule#custom}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.sql"></a>

```java
public LakewatchRuleBatchSql getSql();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sql LakewatchRule#sql}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#warehouse_id LakewatchRule#warehouse_id}.

---

### LakewatchRuleBatchCustom <a name="LakewatchRuleBatchCustom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatchCustom;

LakewatchRuleBatchCustom.builder()
    .notebook(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.notebook">notebook</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.notebook"></a>

```java
public java.lang.String getNotebook();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#notebook LakewatchRule#notebook}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#options LakewatchRule#options}.

---

### LakewatchRuleBatchSql <a name="LakewatchRuleBatchSql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatchSql;

LakewatchRuleBatchSql.builder()
    .query(java.lang.String)
//  .defaultCatalogName(java.lang.String)
//  .defaultSchemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultCatalogName">defaultCatalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultSchemaName">defaultSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#query LakewatchRule#query}.

---

##### `defaultCatalogName`<sup>Optional</sup> <a name="defaultCatalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultCatalogName"></a>

```java
public java.lang.String getDefaultCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_catalog_name LakewatchRule#default_catalog_name}.

---

##### `defaultSchemaName`<sup>Optional</sup> <a name="defaultSchemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql.property.defaultSchemaName"></a>

```java
public java.lang.String getDefaultSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_schema_name LakewatchRule#default_schema_name}.

---

### LakewatchRuleConfig <a name="LakewatchRuleConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleConfig;

LakewatchRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogName(java.lang.String)
    .fidelity(java.lang.String)
    .output(LakewatchRuleOutput)
    .ruleName(java.lang.String)
    .schedule(LakewatchRuleSchedule)
    .schemaName(java.lang.String)
    .severity(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .batch(LakewatchRuleBatch)
//  .category(java.lang.String)
//  .contentResourceId(java.lang.String)
//  .deduplication(java.lang.String)
//  .deduplicationTimeWindow(java.lang.String)
//  .description(java.lang.String)
//  .mitre(IResolvable|java.util.List<LakewatchRuleMitre>)
//  .objective(java.lang.String)
//  .providerConfig(LakewatchRuleProviderConfig)
//  .references(java.util.List<java.lang.String>)
//  .runAsPrincipal(java.lang.String)
//  .runbook(java.lang.String)
//  .suppressUntilTime(java.lang.String)
//  .timerange(LakewatchRuleTimerange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.fidelity">fidelity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.contentResourceId">contentResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplication">deduplication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplicationTimeWindow">deduplicationTimeWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.mitre">mitre</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.objective">objective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.references">references</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runAsPrincipal">runAsPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runbook">runbook</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.suppressUntilTime">suppressUntilTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#catalog_name LakewatchRule#catalog_name}.

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.fidelity"></a>

```java
public java.lang.String getFidelity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#fidelity LakewatchRule#fidelity}.

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.output"></a>

```java
public LakewatchRuleOutput getOutput();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#output LakewatchRule#output}.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#rule_name LakewatchRule#rule_name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schedule"></a>

```java
public LakewatchRuleSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schedule LakewatchRule#schedule}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#schema_name LakewatchRule#schema_name}.

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#severity LakewatchRule#severity}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#annotations LakewatchRule#annotations}.

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.batch"></a>

```java
public LakewatchRuleBatch getBatch();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#batch LakewatchRule#batch}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#category LakewatchRule#category}.

---

##### `contentResourceId`<sup>Optional</sup> <a name="contentResourceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.contentResourceId"></a>

```java
public java.lang.String getContentResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#content_resource_id LakewatchRule#content_resource_id}.

---

##### `deduplication`<sup>Optional</sup> <a name="deduplication" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplication"></a>

```java
public java.lang.String getDeduplication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication LakewatchRule#deduplication}.

---

##### `deduplicationTimeWindow`<sup>Optional</sup> <a name="deduplicationTimeWindow" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.deduplicationTimeWindow"></a>

```java
public java.lang.String getDeduplicationTimeWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#deduplication_time_window LakewatchRule#deduplication_time_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#description LakewatchRule#description}.

---

##### `mitre`<sup>Optional</sup> <a name="mitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.mitre"></a>

```java
public IResolvable|java.util.List<LakewatchRuleMitre> getMitre();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#mitre LakewatchRule#mitre}.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#objective LakewatchRule#objective}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.providerConfig"></a>

```java
public LakewatchRuleProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#provider_config LakewatchRule#provider_config}.

---

##### `references`<sup>Optional</sup> <a name="references" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.references"></a>

```java
public java.util.List<java.lang.String> getReferences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#references LakewatchRule#references}.

---

##### `runAsPrincipal`<sup>Optional</sup> <a name="runAsPrincipal" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runAsPrincipal"></a>

```java
public java.lang.String getRunAsPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#run_as_principal LakewatchRule#run_as_principal}.

---

##### `runbook`<sup>Optional</sup> <a name="runbook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.runbook"></a>

```java
public java.lang.String getRunbook();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#runbook LakewatchRule#runbook}.

---

##### `suppressUntilTime`<sup>Optional</sup> <a name="suppressUntilTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.suppressUntilTime"></a>

```java
public java.lang.String getSuppressUntilTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#suppress_until_time LakewatchRule#suppress_until_time}.

---

##### `timerange`<sup>Optional</sup> <a name="timerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleConfig.property.timerange"></a>

```java
public LakewatchRuleTimerange getTimerange();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#timerange LakewatchRule#timerange}.

---

### LakewatchRuleCreatedBy <a name="LakewatchRuleCreatedBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleCreatedBy;

LakewatchRuleCreatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

### LakewatchRuleMitre <a name="LakewatchRuleMitre" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleMitre;

LakewatchRuleMitre.builder()
//  .subTechnique(java.lang.String)
//  .subTechniqueId(java.lang.String)
//  .tactic(java.lang.String)
//  .taxonomy(java.lang.String)
//  .technique(java.lang.String)
//  .techniqueId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechnique">subTechnique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique LakewatchRule#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechniqueId">subTechniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique_id LakewatchRule#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.tactic">tactic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#tactic LakewatchRule#tactic}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#taxonomy LakewatchRule#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.technique">technique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique LakewatchRule#technique}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.techniqueId">techniqueId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique_id LakewatchRule#technique_id}. |

---

##### `subTechnique`<sup>Optional</sup> <a name="subTechnique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechnique"></a>

```java
public java.lang.String getSubTechnique();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique LakewatchRule#sub_technique}.

---

##### `subTechniqueId`<sup>Optional</sup> <a name="subTechniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.subTechniqueId"></a>

```java
public java.lang.String getSubTechniqueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#sub_technique_id LakewatchRule#sub_technique_id}.

---

##### `tactic`<sup>Optional</sup> <a name="tactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.tactic"></a>

```java
public java.lang.String getTactic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#tactic LakewatchRule#tactic}.

---

##### `taxonomy`<sup>Optional</sup> <a name="taxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#taxonomy LakewatchRule#taxonomy}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique LakewatchRule#technique}.

---

##### `techniqueId`<sup>Optional</sup> <a name="techniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre.property.techniqueId"></a>

```java
public java.lang.String getTechniqueId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#technique_id LakewatchRule#technique_id}.

---

### LakewatchRuleOriginalContentPack <a name="LakewatchRuleOriginalContentPack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOriginalContentPack;

LakewatchRuleOriginalContentPack.builder()
    .build();
```


### LakewatchRuleOutput <a name="LakewatchRuleOutput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOutput;

LakewatchRuleOutput.builder()
//  .context(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultContext(java.lang.Boolean|IResolvable)
//  .eventTimeColumn(java.lang.String)
//  .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.defaultContext">defaultContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.eventTimeColumn">eventTimeColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.summary">summary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#context LakewatchRule#context}.

---

##### `defaultContext`<sup>Optional</sup> <a name="defaultContext" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.defaultContext"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#default_context LakewatchRule#default_context}.

---

##### `eventTimeColumn`<sup>Optional</sup> <a name="eventTimeColumn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.eventTimeColumn"></a>

```java
public java.lang.String getEventTimeColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#event_time_column LakewatchRule#event_time_column}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#summary LakewatchRule#summary}.

---

### LakewatchRuleOwner <a name="LakewatchRuleOwner" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOwner;

LakewatchRuleOwner.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

### LakewatchRuleProviderConfig <a name="LakewatchRuleProviderConfig" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleProviderConfig;

LakewatchRuleProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#workspace_id LakewatchRule#workspace_id}.

---

### LakewatchRuleSchedule <a name="LakewatchRuleSchedule" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleSchedule;

LakewatchRuleSchedule.builder()
//  .atLeastEvery(java.lang.String)
//  .continuous(java.lang.Boolean|IResolvable)
//  .cronExpression(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#at_least_every LakewatchRule#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#continuous LakewatchRule#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#cron_expression LakewatchRule#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#enabled LakewatchRule#enabled}.

---

### LakewatchRuleStatus <a name="LakewatchRuleStatus" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleStatus;

LakewatchRuleStatus.builder()
    .build();
```


### LakewatchRuleTimerange <a name="LakewatchRuleTimerange" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleTimerange;

LakewatchRuleTimerange.builder()
//  .extendLookback(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.property.extendLookback">extendLookback</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}. |

---

##### `extendLookback`<sup>Optional</sup> <a name="extendLookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange.property.extendLookback"></a>

```java
public java.lang.String getExtendLookback();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#extend_lookback LakewatchRule#extend_lookback}.

---

### LakewatchRuleUpdatedBy <a name="LakewatchRuleUpdatedBy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleUpdatedBy;

LakewatchRuleUpdatedBy.builder()
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .principalType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#display_name LakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#email LakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#id LakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule#principal_type LakewatchRule#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchRuleBatchCustomOutputReference <a name="LakewatchRuleBatchCustomOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatchCustomOutputReference;

new LakewatchRuleBatchCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebookInput">notebookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebook">notebook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebookInput"></a>

```java
public java.lang.String getNotebookInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.notebook"></a>

```java
public java.lang.String getNotebook();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleBatchCustom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

---


### LakewatchRuleBatchOutputReference <a name="LakewatchRuleBatchOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatchOutputReference;

new LakewatchRuleBatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom"></a>

```java
public void putCustom(LakewatchRuleBatchCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

---

##### `putSql` <a name="putSql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql"></a>

```java
public void putSql(LakewatchRuleBatchSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

---

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetSql` <a name="resetSql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetSql"></a>

```java
public void resetSql()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference">LakewatchRuleBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference">LakewatchRuleBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sqlInput">sqlInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.custom"></a>

```java
public LakewatchRuleBatchCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustomOutputReference">LakewatchRuleBatchCustomOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sql"></a>

```java
public LakewatchRuleBatchSqlOutputReference getSql();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference">LakewatchRuleBatchSqlOutputReference</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.customInput"></a>

```java
public IResolvable|LakewatchRuleBatchCustom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchCustom">LakewatchRuleBatchCustom</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.sqlInput"></a>

```java
public IResolvable|LakewatchRuleBatchSql getSqlInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleBatch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatch">LakewatchRuleBatch</a>

---


### LakewatchRuleBatchSqlOutputReference <a name="LakewatchRuleBatchSqlOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleBatchSqlOutputReference;

new LakewatchRuleBatchSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName">resetDefaultCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName">resetDefaultSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultCatalogName` <a name="resetDefaultCatalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName"></a>

```java
public void resetDefaultCatalogName()
```

##### `resetDefaultSchemaName` <a name="resetDefaultSchemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName"></a>

```java
public void resetDefaultSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput">defaultCatalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput">defaultSchemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogName">defaultCatalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaName">defaultSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultCatalogNameInput`<sup>Optional</sup> <a name="defaultCatalogNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```java
public java.lang.String getDefaultCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `defaultSchemaNameInput`<sup>Optional</sup> <a name="defaultSchemaNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```java
public java.lang.String getDefaultSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `defaultCatalogName`<sup>Required</sup> <a name="defaultCatalogName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultCatalogName"></a>

```java
public java.lang.String getDefaultCatalogName();
```

- *Type:* java.lang.String

---

##### `defaultSchemaName`<sup>Required</sup> <a name="defaultSchemaName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.defaultSchemaName"></a>

```java
public java.lang.String getDefaultSchemaName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSqlOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleBatchSql getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleBatchSql">LakewatchRuleBatchSql</a>

---


### LakewatchRuleCreatedByOutputReference <a name="LakewatchRuleCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleCreatedByOutputReference;

new LakewatchRuleCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy">LakewatchRuleCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedByOutputReference.property.internalValue"></a>

```java
public LakewatchRuleCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleCreatedBy">LakewatchRuleCreatedBy</a>

---


### LakewatchRuleMitreList <a name="LakewatchRuleMitreList" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleMitreList;

new LakewatchRuleMitreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get"></a>

```java
public LakewatchRuleMitreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LakewatchRuleMitre> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>>

---


### LakewatchRuleMitreOutputReference <a name="LakewatchRuleMitreOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleMitreOutputReference;

new LakewatchRuleMitreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechnique">resetSubTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechniqueId">resetSubTechniqueId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTactic">resetTactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTaxonomy">resetTaxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechnique">resetTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechniqueId">resetTechniqueId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubTechnique` <a name="resetSubTechnique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechnique"></a>

```java
public void resetSubTechnique()
```

##### `resetSubTechniqueId` <a name="resetSubTechniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetSubTechniqueId"></a>

```java
public void resetSubTechniqueId()
```

##### `resetTactic` <a name="resetTactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTactic"></a>

```java
public void resetTactic()
```

##### `resetTaxonomy` <a name="resetTaxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTaxonomy"></a>

```java
public void resetTaxonomy()
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechnique"></a>

```java
public void resetTechnique()
```

##### `resetTechniqueId` <a name="resetTechniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.resetTechniqueId"></a>

```java
public void resetTechniqueId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueIdInput">subTechniqueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueInput">subTechniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tacticInput">tacticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomyInput">taxonomyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueIdInput">techniqueIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechnique">subTechnique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueId">subTechniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tactic">tactic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomy">taxonomy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.technique">technique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueId">techniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subTechniqueIdInput`<sup>Optional</sup> <a name="subTechniqueIdInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueIdInput"></a>

```java
public java.lang.String getSubTechniqueIdInput();
```

- *Type:* java.lang.String

---

##### `subTechniqueInput`<sup>Optional</sup> <a name="subTechniqueInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueInput"></a>

```java
public java.lang.String getSubTechniqueInput();
```

- *Type:* java.lang.String

---

##### `tacticInput`<sup>Optional</sup> <a name="tacticInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tacticInput"></a>

```java
public java.lang.String getTacticInput();
```

- *Type:* java.lang.String

---

##### `taxonomyInput`<sup>Optional</sup> <a name="taxonomyInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomyInput"></a>

```java
public java.lang.String getTaxonomyInput();
```

- *Type:* java.lang.String

---

##### `techniqueIdInput`<sup>Optional</sup> <a name="techniqueIdInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueIdInput"></a>

```java
public java.lang.String getTechniqueIdInput();
```

- *Type:* java.lang.String

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueInput"></a>

```java
public java.lang.String getTechniqueInput();
```

- *Type:* java.lang.String

---

##### `subTechnique`<sup>Required</sup> <a name="subTechnique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechnique"></a>

```java
public java.lang.String getSubTechnique();
```

- *Type:* java.lang.String

---

##### `subTechniqueId`<sup>Required</sup> <a name="subTechniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.subTechniqueId"></a>

```java
public java.lang.String getSubTechniqueId();
```

- *Type:* java.lang.String

---

##### `tactic`<sup>Required</sup> <a name="tactic" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.tactic"></a>

```java
public java.lang.String getTactic();
```

- *Type:* java.lang.String

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.taxonomy"></a>

```java
public java.lang.String getTaxonomy();
```

- *Type:* java.lang.String

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

---

##### `techniqueId`<sup>Required</sup> <a name="techniqueId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.techniqueId"></a>

```java
public java.lang.String getTechniqueId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitreOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleMitre getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleMitre">LakewatchRuleMitre</a>

---


### LakewatchRuleOriginalContentPackOutputReference <a name="LakewatchRuleOriginalContentPackOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOriginalContentPackOutputReference;

new LakewatchRuleOriginalContentPackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack">LakewatchRuleOriginalContentPack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPackOutputReference.property.internalValue"></a>

```java
public LakewatchRuleOriginalContentPack getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOriginalContentPack">LakewatchRuleOriginalContentPack</a>

---


### LakewatchRuleOutputOutputReference <a name="LakewatchRuleOutputOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOutputOutputReference;

new LakewatchRuleOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetDefaultContext">resetDefaultContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetEventTimeColumn">resetEventTimeColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetContext"></a>

```java
public void resetContext()
```

##### `resetDefaultContext` <a name="resetDefaultContext" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetDefaultContext"></a>

```java
public void resetDefaultContext()
```

##### `resetEventTimeColumn` <a name="resetEventTimeColumn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetEventTimeColumn"></a>

```java
public void resetEventTimeColumn()
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.resetSummary"></a>

```java
public void resetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.contextInput">contextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContextInput">defaultContextInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumnInput">eventTimeColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContext">defaultContext</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumn">eventTimeColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.contextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultContextInput`<sup>Optional</sup> <a name="defaultContextInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContextInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContextInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTimeColumnInput`<sup>Optional</sup> <a name="eventTimeColumnInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumnInput"></a>

```java
public java.lang.String getEventTimeColumnInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultContext`<sup>Required</sup> <a name="defaultContext" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.defaultContext"></a>

```java
public java.lang.Boolean|IResolvable getDefaultContext();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTimeColumn`<sup>Required</sup> <a name="eventTimeColumn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.eventTimeColumn"></a>

```java
public java.lang.String getEventTimeColumn();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOutput">LakewatchRuleOutput</a>

---


### LakewatchRuleOwnerOutputReference <a name="LakewatchRuleOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleOwnerOutputReference;

new LakewatchRuleOwnerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner">LakewatchRuleOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwnerOutputReference.property.internalValue"></a>

```java
public LakewatchRuleOwner getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleOwner">LakewatchRuleOwner</a>

---


### LakewatchRuleProviderConfigOutputReference <a name="LakewatchRuleProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleProviderConfigOutputReference;

new LakewatchRuleProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleProviderConfig">LakewatchRuleProviderConfig</a>

---


### LakewatchRuleScheduleOutputReference <a name="LakewatchRuleScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleScheduleOutputReference;

new LakewatchRuleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetAtLeastEvery"></a>

```java
public void resetAtLeastEvery()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuous">continuous</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEveryInput"></a>

```java
public java.lang.String getAtLeastEveryInput();
```

- *Type:* java.lang.String

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuousInput"></a>

```java
public java.lang.Boolean|IResolvable getContinuousInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.atLeastEvery"></a>

```java
public java.lang.String getAtLeastEvery();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.continuous"></a>

```java
public java.lang.Boolean|IResolvable getContinuous();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleSchedule">LakewatchRuleSchedule</a>

---


### LakewatchRuleStatusOutputReference <a name="LakewatchRuleStatusOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleStatusOutputReference;

new LakewatchRuleStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastCompleteTime">lastCompleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastErrorMessage">lastErrorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStartTime">lastStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStatusChangeTime">lastStatusChangeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.runState">runState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus">LakewatchRuleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `lastCompleteTime`<sup>Required</sup> <a name="lastCompleteTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastCompleteTime"></a>

```java
public java.lang.String getLastCompleteTime();
```

- *Type:* java.lang.String

---

##### `lastErrorMessage`<sup>Required</sup> <a name="lastErrorMessage" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastErrorMessage"></a>

```java
public java.lang.String getLastErrorMessage();
```

- *Type:* java.lang.String

---

##### `lastStartTime`<sup>Required</sup> <a name="lastStartTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStartTime"></a>

```java
public java.lang.String getLastStartTime();
```

- *Type:* java.lang.String

---

##### `lastStatusChangeTime`<sup>Required</sup> <a name="lastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lastStatusChangeTime"></a>

```java
public java.lang.String getLastStatusChangeTime();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runState`<sup>Required</sup> <a name="runState" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.runState"></a>

```java
public java.lang.String getRunState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatusOutputReference.property.internalValue"></a>

```java
public LakewatchRuleStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleStatus">LakewatchRuleStatus</a>

---


### LakewatchRuleTimerangeOutputReference <a name="LakewatchRuleTimerangeOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleTimerangeOutputReference;

new LakewatchRuleTimerangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resetExtendLookback">resetExtendLookback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendLookback` <a name="resetExtendLookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.resetExtendLookback"></a>

```java
public void resetExtendLookback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookbackInput">extendLookbackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookback">extendLookback</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendLookbackInput`<sup>Optional</sup> <a name="extendLookbackInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookbackInput"></a>

```java
public java.lang.String getExtendLookbackInput();
```

- *Type:* java.lang.String

---

##### `extendLookback`<sup>Required</sup> <a name="extendLookback" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.extendLookback"></a>

```java
public java.lang.String getExtendLookback();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerangeOutputReference.property.internalValue"></a>

```java
public IResolvable|LakewatchRuleTimerange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleTimerange">LakewatchRuleTimerange</a>

---


### LakewatchRuleUpdatedByOutputReference <a name="LakewatchRuleUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.lakewatch_rule.LakewatchRuleUpdatedByOutputReference;

new LakewatchRuleUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.resetPrincipalType"></a>

```java
public void resetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy">LakewatchRuleUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedByOutputReference.property.internalValue"></a>

```java
public LakewatchRuleUpdatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRule.LakewatchRuleUpdatedBy">LakewatchRuleUpdatedBy</a>

---




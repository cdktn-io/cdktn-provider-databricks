# `supervisorAgentTool` Submodule <a name="`supervisorAgentTool` Submodule" id="@cdktn/provider-databricks.supervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupervisorAgentTool <a name="SupervisorAgentTool" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentTool;

SupervisorAgentTool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
    .toolId(java.lang.String)
    .toolType(java.lang.String)
//  .app(SupervisorAgentToolApp)
//  .description(java.lang.String)
//  .genieSpace(SupervisorAgentToolGenieSpace)
//  .knowledgeAssistant(SupervisorAgentToolKnowledgeAssistant)
//  .providerConfig(SupervisorAgentToolProviderConfig)
//  .ucConnection(SupervisorAgentToolUcConnection)
//  .ucFunction(SupervisorAgentToolUcFunction)
//  .volume(SupervisorAgentToolVolume)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolId">toolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolType">toolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.app"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.genieSpace"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `knowledgeAssistant`<sup>Optional</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.knowledgeAssistant"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `ucConnection`<sup>Optional</sup> <a name="ucConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `ucFunction`<sup>Optional</sup> <a name="ucFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucFunction"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant">putKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection">putUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction">putUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant">resetKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection">resetUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction">resetUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp"></a>

```java
public void putApp(SupervisorAgentToolApp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace"></a>

```java
public void putGenieSpace(SupervisorAgentToolGenieSpace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `putKnowledgeAssistant` <a name="putKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant"></a>

```java
public void putKnowledgeAssistant(SupervisorAgentToolKnowledgeAssistant value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig"></a>

```java
public void putProviderConfig(SupervisorAgentToolProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `putUcConnection` <a name="putUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection"></a>

```java
public void putUcConnection(SupervisorAgentToolUcConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `putUcFunction` <a name="putUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction"></a>

```java
public void putUcFunction(SupervisorAgentToolUcFunction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `putVolume` <a name="putVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume"></a>

```java
public void putVolume(SupervisorAgentToolVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp"></a>

```java
public void resetApp()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace"></a>

```java
public void resetGenieSpace()
```

##### `resetKnowledgeAssistant` <a name="resetKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant"></a>

```java
public void resetKnowledgeAssistant()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetUcConnection` <a name="resetUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection"></a>

```java
public void resetUcConnection()
```

##### `resetUcFunction` <a name="resetUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction"></a>

```java
public void resetUcFunction()
```

##### `resetVolume` <a name="resetVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume"></a>

```java
public void resetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentTool;

SupervisorAgentTool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentTool;

SupervisorAgentTool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentTool;

SupervisorAgentTool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentTool;

SupervisorAgentTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SupervisorAgentTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SupervisorAgentTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput">appInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput">genieSpaceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput">knowledgeAssistantInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput">providerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput">toolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput">toolTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput">ucConnectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput">ucFunctionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput">volumeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId">toolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType">toolType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app"></a>

```java
public SupervisorAgentToolAppOutputReference getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace"></a>

```java
public SupervisorAgentToolGenieSpaceOutputReference getGenieSpace();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistant`<sup>Required</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant"></a>

```java
public SupervisorAgentToolKnowledgeAssistantOutputReference getKnowledgeAssistant();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig"></a>

```java
public SupervisorAgentToolProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a>

---

##### `ucConnection`<sup>Required</sup> <a name="ucConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection"></a>

```java
public SupervisorAgentToolUcConnectionOutputReference getUcConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a>

---

##### `ucFunction`<sup>Required</sup> <a name="ucFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction"></a>

```java
public SupervisorAgentToolUcFunctionOutputReference getUcFunction();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume"></a>

```java
public SupervisorAgentToolVolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput"></a>

```java
public IResolvable|SupervisorAgentToolApp getAppInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput"></a>

```java
public IResolvable|SupervisorAgentToolGenieSpace getGenieSpaceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `knowledgeAssistantInput`<sup>Optional</sup> <a name="knowledgeAssistantInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput"></a>

```java
public IResolvable|SupervisorAgentToolKnowledgeAssistant getKnowledgeAssistantInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput"></a>

```java
public IResolvable|SupervisorAgentToolProviderConfig getProviderConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput"></a>

```java
public java.lang.String getToolIdInput();
```

- *Type:* java.lang.String

---

##### `toolTypeInput`<sup>Optional</sup> <a name="toolTypeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput"></a>

```java
public java.lang.String getToolTypeInput();
```

- *Type:* java.lang.String

---

##### `ucConnectionInput`<sup>Optional</sup> <a name="ucConnectionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput"></a>

```java
public IResolvable|SupervisorAgentToolUcConnection getUcConnectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `ucFunctionInput`<sup>Optional</sup> <a name="ucFunctionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput"></a>

```java
public IResolvable|SupervisorAgentToolUcFunction getUcFunctionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput"></a>

```java
public IResolvable|SupervisorAgentToolVolume getVolumeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType"></a>

```java
public java.lang.String getToolType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorAgentToolApp <a name="SupervisorAgentToolApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolApp;

SupervisorAgentToolApp.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolConfig <a name="SupervisorAgentToolConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolConfig;

SupervisorAgentToolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
    .toolId(java.lang.String)
    .toolType(java.lang.String)
//  .app(SupervisorAgentToolApp)
//  .description(java.lang.String)
//  .genieSpace(SupervisorAgentToolGenieSpace)
//  .knowledgeAssistant(SupervisorAgentToolKnowledgeAssistant)
//  .providerConfig(SupervisorAgentToolProviderConfig)
//  .ucConnection(SupervisorAgentToolUcConnection)
//  .ucFunction(SupervisorAgentToolUcFunction)
//  .volume(SupervisorAgentToolVolume)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId">toolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType">toolType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant">knowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection">ucConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction">ucFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `toolType`<sup>Required</sup> <a name="toolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType"></a>

```java
public java.lang.String getToolType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app"></a>

```java
public SupervisorAgentToolApp getApp();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace"></a>

```java
public SupervisorAgentToolGenieSpace getGenieSpace();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `knowledgeAssistant`<sup>Optional</sup> <a name="knowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant"></a>

```java
public SupervisorAgentToolKnowledgeAssistant getKnowledgeAssistant();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig"></a>

```java
public SupervisorAgentToolProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `ucConnection`<sup>Optional</sup> <a name="ucConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection"></a>

```java
public SupervisorAgentToolUcConnection getUcConnection();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `ucFunction`<sup>Optional</sup> <a name="ucFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction"></a>

```java
public SupervisorAgentToolUcFunction getUcFunction();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume"></a>

```java
public SupervisorAgentToolVolume getVolume();
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

### SupervisorAgentToolGenieSpace <a name="SupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolGenieSpace;

SupervisorAgentToolGenieSpace.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SupervisorAgentToolKnowledgeAssistant <a name="SupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolKnowledgeAssistant;

SupervisorAgentToolKnowledgeAssistant.builder()
    .knowledgeAssistantId(java.lang.String)
//  .servingEndpointName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">servingEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}. |

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```java
public java.lang.String getKnowledgeAssistantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}.

---

##### `servingEndpointName`<sup>Optional</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```java
public java.lang.String getServingEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}.

---

### SupervisorAgentToolProviderConfig <a name="SupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolProviderConfig;

SupervisorAgentToolProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}.

---

### SupervisorAgentToolUcConnection <a name="SupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolUcConnection;

SupervisorAgentToolUcConnection.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolUcFunction <a name="SupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolUcFunction;

SupervisorAgentToolUcFunction.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolVolume <a name="SupervisorAgentToolVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolVolume;

SupervisorAgentToolVolume.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorAgentToolAppOutputReference <a name="SupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolAppOutputReference;

new SupervisorAgentToolAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolApp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---


### SupervisorAgentToolGenieSpaceOutputReference <a name="SupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolGenieSpaceOutputReference;

new SupervisorAgentToolGenieSpaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolGenieSpace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---


### SupervisorAgentToolKnowledgeAssistantOutputReference <a name="SupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolKnowledgeAssistantOutputReference;

new SupervisorAgentToolKnowledgeAssistantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">resetServingEndpointName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServingEndpointName` <a name="resetServingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```java
public void resetServingEndpointName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledgeAssistantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">servingEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledgeAssistantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">servingEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistantIdInput`<sup>Optional</sup> <a name="knowledgeAssistantIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```java
public java.lang.String getKnowledgeAssistantIdInput();
```

- *Type:* java.lang.String

---

##### `servingEndpointNameInput`<sup>Optional</sup> <a name="servingEndpointNameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```java
public java.lang.String getServingEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `knowledgeAssistantId`<sup>Required</sup> <a name="knowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```java
public java.lang.String getKnowledgeAssistantId();
```

- *Type:* java.lang.String

---

##### `servingEndpointName`<sup>Required</sup> <a name="servingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```java
public java.lang.String getServingEndpointName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolKnowledgeAssistant getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---


### SupervisorAgentToolProviderConfigOutputReference <a name="SupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolProviderConfigOutputReference;

new SupervisorAgentToolProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolProviderConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---


### SupervisorAgentToolUcConnectionOutputReference <a name="SupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolUcConnectionOutputReference;

new SupervisorAgentToolUcConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolUcConnection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---


### SupervisorAgentToolUcFunctionOutputReference <a name="SupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolUcFunctionOutputReference;

new SupervisorAgentToolUcFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolUcFunction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---


### SupervisorAgentToolVolumeOutputReference <a name="SupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.supervisor_agent_tool.SupervisorAgentToolVolumeOutputReference;

new SupervisorAgentToolVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```java
public IResolvable|SupervisorAgentToolVolume getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---




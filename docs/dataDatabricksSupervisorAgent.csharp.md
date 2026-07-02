# `dataDatabricksSupervisorAgent` Submodule <a name="`dataDatabricksSupervisorAgent` Submodule" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgent <a name="DataDatabricksSupervisorAgent" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent databricks_supervisor_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksSupervisorAgent(Construct Scope, string Id, DataDatabricksSupervisorAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig">DataDatabricksSupervisorAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig">DataDatabricksSupervisorAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksSupervisorAgentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksSupervisorAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksSupervisorAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksSupervisorAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksSupervisorAgent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksSupervisorAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksSupervisorAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSupervisorAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSupervisorAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference">DataDatabricksSupervisorAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.providerConfig"></a>

```csharp
public DataDatabricksSupervisorAgentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference">DataDatabricksSupervisorAgentProviderConfigOutputReference</a>

---

##### `SupervisorAgentId`<sup>Required</sup> <a name="SupervisorAgentId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.supervisorAgentId"></a>

```csharp
public string SupervisorAgentId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksSupervisorAgentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentConfig <a name="DataDatabricksSupervisorAgentConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksSupervisorAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksSupervisorAgentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#name DataDatabricksSupervisorAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#provider_config DataDatabricksSupervisorAgent#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#name DataDatabricksSupervisorAgent#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentConfig.property.providerConfig"></a>

```csharp
public DataDatabricksSupervisorAgentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#provider_config DataDatabricksSupervisorAgent#provider_config}.

---

### DataDatabricksSupervisorAgentProviderConfig <a name="DataDatabricksSupervisorAgentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksSupervisorAgentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#workspace_id DataDatabricksSupervisorAgent#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/supervisor_agent#workspace_id DataDatabricksSupervisorAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksSupervisorAgentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksSupervisorAgentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksSupervisorAgent.DataDatabricksSupervisorAgentProviderConfig">DataDatabricksSupervisorAgentProviderConfig</a>

---




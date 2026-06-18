# `dataDatabricksKnowledgeAssistants` Submodule <a name="`dataDatabricksKnowledgeAssistants` Submodule" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants databricks_knowledge_assistants}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistants(Construct Scope, string Id, DataDatabricksKnowledgeAssistantsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig">DataDatabricksKnowledgeAssistantsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig">DataDatabricksKnowledgeAssistantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksKnowledgeAssistantsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksKnowledgeAssistants.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksKnowledgeAssistants.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksKnowledgeAssistants.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksKnowledgeAssistants.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksKnowledgeAssistants resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksKnowledgeAssistants to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksKnowledgeAssistants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksKnowledgeAssistants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants">KnowledgeAssistants</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `KnowledgeAssistants`<sup>Required</sup> <a name="KnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.knowledgeAssistants"></a>

```csharp
public DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList KnowledgeAssistants { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfig"></a>

```csharp
public DataDatabricksKnowledgeAssistantsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksKnowledgeAssistantsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistants.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksKnowledgeAssistantsConfig <a name="DataDatabricksKnowledgeAssistantsConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksKnowledgeAssistantsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#page_size DataDatabricksKnowledgeAssistants#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksKnowledgeAssistantsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistants <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistants" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsKnowledgeAssistants {
    string Name,
    DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#name DataDatabricksKnowledgeAssistants#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants.property.providerConfig"></a>

```csharp
public DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#provider_config DataDatabricksKnowledgeAssistants#provider_config}.

---

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

### DataDatabricksKnowledgeAssistantsProviderConfig <a name="DataDatabricksKnowledgeAssistantsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/knowledge_assistants#workspace_id DataDatabricksKnowledgeAssistants#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get"></a>

```csharp
private DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksKnowledgeAssistantsKnowledgeAssistants[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>[]

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.errorInfo"></a>

```csharp
public string ErrorInfo { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksKnowledgeAssistantsKnowledgeAssistants InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistants">DataDatabricksKnowledgeAssistantsKnowledgeAssistants</a>

---


### DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsKnowledgeAssistantsProviderConfig</a>

---


### DataDatabricksKnowledgeAssistantsProviderConfigOutputReference <a name="DataDatabricksKnowledgeAssistantsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksKnowledgeAssistantsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksKnowledgeAssistantsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksKnowledgeAssistants.DataDatabricksKnowledgeAssistantsProviderConfig">DataDatabricksKnowledgeAssistantsProviderConfig</a>

---




# `dataDatabricksGenieAgent` Submodule <a name="`dataDatabricksGenieAgent` Submodule" id="@cdktn/provider-databricks.dataDatabricksGenieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGenieAgent <a name="DataDatabricksGenieAgent" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgent(Construct Scope, string Id, DataDatabricksGenieAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig">DataDatabricksGenieAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksGenieAgentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGenieAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGenieAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGenieAgent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGenieAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGenieAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath">EffectiveParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.definition"></a>

```csharp
public DataDatabricksGenieAgentDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference">DataDatabricksGenieAgentDefinitionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveParentPath`<sup>Required</sup> <a name="EffectiveParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.effectiveParentPath"></a>

```csharp
public string EffectiveParentPath { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfig"></a>

```csharp
public DataDatabricksGenieAgentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference">DataDatabricksGenieAgentProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGenieAgentConfig <a name="DataDatabricksGenieAgentConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksGenieAgentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentConfig.property.providerConfig"></a>

```csharp
public DataDatabricksGenieAgentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}.

---

### DataDatabricksGenieAgentDefinition <a name="DataDatabricksGenieAgentDefinition" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinition {
    DataDatabricksGenieAgentDefinitionBenchmarks Benchmarks = null,
    DataDatabricksGenieAgentDefinitionConfig Config = null,
    DataDatabricksGenieAgentDefinitionDataSources DataSources = null,
    DataDatabricksGenieAgentDefinitionInstructions Instructions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}. |

---

##### `Benchmarks`<sup>Optional</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.benchmarks"></a>

```csharp
public DataDatabricksGenieAgentDefinitionBenchmarks Benchmarks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.config"></a>

```csharp
public DataDatabricksGenieAgentDefinitionConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}.

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.dataSources"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSources DataSources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition.property.instructions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructions Instructions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarks <a name="DataDatabricksGenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarks {
    IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] Questions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions">Questions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}. |

---

##### `Questions`<sup>Optional</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks.property.questions"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] Questions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestions <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestions {
    string Id,
    string Question,
    IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] Answer = null,
    string EvaluationNote = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer">Answer</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">EvaluationNote</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `Answer`<sup>Optional</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] Answer { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}.

---

##### `EvaluationNote`<sup>Optional</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```csharp
public string EvaluationNote { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}.

---

### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer {
    string Content,
    string Format
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}.

---

### DataDatabricksGenieAgentDefinitionConfig <a name="DataDatabricksGenieAgentDefinitionConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionConfig {
    IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] SampleQuestions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions">SampleQuestions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}. |

---

##### `SampleQuestions`<sup>Optional</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig.property.sampleQuestions"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] SampleQuestions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}.

---

### DataDatabricksGenieAgentDefinitionConfigSampleQuestions <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionConfigSampleQuestions {
    string Id,
    string Question
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

### DataDatabricksGenieAgentDefinitionDataSources <a name="DataDatabricksGenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSources {
    IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] McpConnections = null,
    IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables[] Tables = null,
    IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections">McpConnections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables">Tables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes">Volumes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}. |

---

##### `McpConnections`<sup>Optional</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.mcpConnections"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] McpConnections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}.

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.tables"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables[] Tables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}.

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources.property.volumes"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] Volumes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections {
    string McpConnection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">McpConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}. |

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```csharp
public string McpConnection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTables <a name="DataDatabricksGenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTables {
    string Identifier,
    IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigs = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs">ColumnConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `ColumnConfigs`<sup>Optional</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs {
    string Column,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable EnableEntityMatching = null,
    bool|IResolvable EnableFormatAssistance = null,
    bool|IResolvable Exclude = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">Column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">Exclude</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `EnableEntityMatching`<sup>Optional</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```csharp
public bool|IResolvable EnableEntityMatching { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}.

---

##### `EnableFormatAssistance`<sup>Optional</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```csharp
public bool|IResolvable EnableFormatAssistance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```csharp
public bool|IResolvable Exclude { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionDataSourcesVolumes <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesVolumes {
    string Path,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

### DataDatabricksGenieAgentDefinitionInstructions <a name="DataDatabricksGenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructions {
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqls = null,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecs = null,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctions = null,
    DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets SqlSnippets = null,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] TextInstructions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs">JoinSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions">SqlFunctions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions">TextInstructions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}. |

---

##### `ExampleQuestionSqls`<sup>Optional</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqls { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}.

---

##### `JoinSpecs`<sup>Optional</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.joinSpecs"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}.

---

##### `SqlFunctions`<sup>Optional</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}.

---

##### `SqlSnippets`<sup>Optional</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets SqlSnippets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}.

---

##### `TextInstructions`<sup>Optional</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions.property.textInstructions"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] TextInstructions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls {
    string Id,
    string Question,
    string Sql,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Parameters = null,
    string UsageGuidance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">UsageGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}.

---

##### `UsageGuidance`<sup>Optional</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```csharp
public string UsageGuidance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters {
    string Name,
    DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValue = null,
    string Description = null,
    string TypeHint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">TypeHint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}.

---

##### `TypeHint`<sup>Optional</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```csharp
public string TypeHint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
    DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRange = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}. |

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}.

---

### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
    string Max = null,
    string Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">Max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">Min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```csharp
public string Max { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```csharp
public string Min { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs {
    string Id,
    DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft Left,
    DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight Right,
    string Sql,
    string Comment = null,
    string Instruction = null,
    string RelationshipType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">RelationshipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft Left { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}.

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight Right { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```csharp
public string RelationshipType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft {
    string Identifier,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight {
    string Identifier,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions {
    string Id,
    string Identifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets {
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Expressions = null,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] Filters = null,
    IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Measures = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions">Expressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures">Measures</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}. |

---

##### `Expressions`<sup>Optional</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Expressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}.

---

##### `Measures`<sup>Optional</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Measures { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions {
    string Id,
    string Sql,
    string Alias = null,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters {
    string Id,
    string Sql,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures {
    string Id,
    string Sql,
    string Alias = null,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}.

---

### DataDatabricksGenieAgentDefinitionInstructionsTextInstructions <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsTextInstructions {
    string Content,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksGenieAgentProviderConfig <a name="DataDatabricksGenieAgentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGenieAgentDefinitionBenchmarksOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions">PutQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions">ResetQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuestions` <a name="PutQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```csharp
private void PutQuestions(IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `ResetQuestions` <a name="ResetQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```csharp
private void ResetQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions">Questions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">QuestionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Questions`<sup>Required</sup> <a name="Questions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList Questions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `QuestionsInput`<sup>Optional</sup> <a name="QuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] QuestionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>[]

---


### DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">PutAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">ResetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">ResetEvaluationNote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswer` <a name="PutAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```csharp
private void PutAnswer(IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `ResetAnswer` <a name="ResetAnswer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```csharp
private void ResetAnswer()
```

##### `ResetEvaluationNote` <a name="ResetEvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```csharp
private void ResetEvaluationNote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">Answer</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">AnswerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">EvaluationNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">EvaluationNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Answer`<sup>Required</sup> <a name="Answer" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```csharp
public DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList Answer { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `AnswerInput`<sup>Optional</sup> <a name="AnswerInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] AnswerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer">DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `EvaluationNoteInput`<sup>Optional</sup> <a name="EvaluationNoteInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```csharp
public string EvaluationNoteInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `EvaluationNote`<sup>Required</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```csharp
public string EvaluationNote { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarksQuestions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksQuestions">DataDatabricksGenieAgentDefinitionBenchmarksQuestions</a>

---


### DataDatabricksGenieAgentDefinitionConfigOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions">PutSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions">ResetSampleQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSampleQuestions` <a name="PutSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```csharp
private void PutSampleQuestions(IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `ResetSampleQuestions` <a name="ResetSampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```csharp
private void ResetSampleQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions">SampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">SampleQuestionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SampleQuestions`<sup>Required</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList SampleQuestions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList">DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `SampleQuestionsInput`<sup>Optional</sup> <a name="SampleQuestionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] SampleQuestionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>[]

---


### DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfigSampleQuestions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigSampleQuestions">DataDatabricksGenieAgentDefinitionConfigSampleQuestions</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">McpConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">McpConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpConnectionInput`<sup>Optional</sup> <a name="McpConnectionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```csharp
public string McpConnectionInput { get; }
```

- *Type:* string

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```csharp
public string McpConnection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">PutMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">ResetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables">ResetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMcpConnections` <a name="PutMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```csharp
private void PutMcpConnections(IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `PutTables` <a name="PutTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```csharp
private void PutTables(IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `ResetMcpConnections` <a name="ResetMcpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```csharp
private void ResetMcpConnections()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```csharp
private void ResetTables()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">McpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables">Tables</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">McpConnectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">TablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpConnections`<sup>Required</sup> <a name="McpConnections" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList McpConnections { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSourcesTablesList Tables { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList">DataDatabricksGenieAgentDefinitionDataSourcesTablesList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSourcesVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList">DataDatabricksGenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `McpConnectionsInput`<sup>Optional</sup> <a name="McpConnectionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] McpConnectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections">DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables[] TablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] VolumesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">ResetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">ResetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableEntityMatching` <a name="ResetEnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```csharp
private void ResetEnableEntityMatching()
```

##### `ResetEnableFormatAssistance` <a name="ResetEnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```csharp
private void ResetEnableFormatAssistance()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">EnableEntityMatchingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">EnableFormatAssistanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">Exclude</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableEntityMatchingInput`<sup>Optional</sup> <a name="EnableEntityMatchingInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```csharp
public bool|IResolvable EnableEntityMatchingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableFormatAssistanceInput`<sup>Optional</sup> <a name="EnableFormatAssistanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```csharp
public bool|IResolvable EnableFormatAssistanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```csharp
public bool|IResolvable ExcludeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableEntityMatching`<sup>Required</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```csharp
public bool|IResolvable EnableEntityMatching { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableFormatAssistance`<sup>Required</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```csharp
public bool|IResolvable EnableFormatAssistance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```csharp
public bool|IResolvable Exclude { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">PutColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">ResetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnConfigs` <a name="PutColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```csharp
private void PutColumnConfigs(IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `ResetColumnConfigs` <a name="ResetColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```csharp
private void ResetColumnConfigs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">ColumnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">ColumnConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnConfigs`<sup>Required</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList ColumnConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `ColumnConfigsInput`<sup>Optional</sup> <a name="ColumnConfigsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs">DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesTables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesTables">DataDatabricksGenieAgentDefinitionDataSourcesTables</a>

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesList <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>[]

---


### DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference <a name="DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSourcesVolumes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesVolumes">DataDatabricksGenieAgentDefinitionDataSourcesVolumes</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">ResetUsageGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetUsageGuidance` <a name="ResetUsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```csharp
private void ResetUsageGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">UsageGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">UsageGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `UsageGuidanceInput`<sup>Optional</sup> <a name="UsageGuidanceInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```csharp
public string UsageGuidanceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `UsageGuidance`<sup>Required</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```csharp
public string UsageGuidance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```csharp
private void PutValueRange(DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```csharp
private void ResetValueRange()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference ValueRange { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">MinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">Max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">Min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```csharp
public string MaxInput { get; }
```

- *Type:* string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```csharp
public string MinInput { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```csharp
public string Max { get; }
```

- *Type:* string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```csharp
public string Min { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">ResetTypeHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```csharp
private void PutDefaultValue(DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTypeHint` <a name="ResetTypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```csharp
private void ResetTypeHint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">TypeHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">TypeHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference DefaultValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeHintInput`<sup>Optional</sup> <a name="TypeHintInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```csharp
public string TypeHintInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TypeHint`<sup>Required</sup> <a name="TypeHint" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```csharp
public string TypeHint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">PutLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">PutRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeft` <a name="PutLeft" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```csharp
private void PutLeft(DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `PutRight` <a name="PutRight" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```csharp
private void PutRight(DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```csharp
private void ResetRelationshipType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">LeftInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">RightInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">RelationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference Left { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference Right { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft LeftInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```csharp
public string RelationshipTypeInput { get; }
```

- *Type:* string

---

##### `RightInput`<sup>Optional</sup> <a name="RightInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight RightInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```csharp
public string RelationshipType { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">PutExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">PutJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">PutSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">PutSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions">PutTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">ResetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">ResetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">ResetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">ResetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">ResetTextInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExampleQuestionSqls` <a name="PutExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```csharp
private void PutExampleQuestionSqls(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `PutJoinSpecs` <a name="PutJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```csharp
private void PutJoinSpecs(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `PutSqlFunctions` <a name="PutSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```csharp
private void PutSqlFunctions(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `PutSqlSnippets` <a name="PutSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```csharp
private void PutSqlSnippets(DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `PutTextInstructions` <a name="PutTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```csharp
private void PutTextInstructions(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `ResetExampleQuestionSqls` <a name="ResetExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```csharp
private void ResetExampleQuestionSqls()
```

##### `ResetJoinSpecs` <a name="ResetJoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```csharp
private void ResetJoinSpecs()
```

##### `ResetSqlFunctions` <a name="ResetSqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```csharp
private void ResetSqlFunctions()
```

##### `ResetSqlSnippets` <a name="ResetSqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```csharp
private void ResetSqlSnippets()
```

##### `ResetTextInstructions` <a name="ResetTextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```csharp
private void ResetTextInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">JoinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">SqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions">TextInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">ExampleQuestionSqlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">JoinSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">SqlFunctionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">SqlSnippetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">TextInstructionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExampleQuestionSqls`<sup>Required</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList ExampleQuestionSqls { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `JoinSpecs`<sup>Required</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList JoinSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `SqlFunctions`<sup>Required</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList SqlFunctions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `SqlSnippets`<sup>Required</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference SqlSnippets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `TextInstructions`<sup>Required</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList TextInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList">DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `ExampleQuestionSqlsInput`<sup>Optional</sup> <a name="ExampleQuestionSqlsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls">DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `JoinSpecsInput`<sup>Optional</sup> <a name="JoinSpecsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs">DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `SqlFunctionsInput`<sup>Optional</sup> <a name="SqlFunctionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `SqlSnippetsInput`<sup>Optional</sup> <a name="SqlSnippetsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets SqlSnippetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `TextInstructionsInput`<sup>Optional</sup> <a name="TextInstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] TextInstructionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions">DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">PutExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">PutMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">ResetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">ResetMeasures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressions` <a name="PutExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```csharp
private void PutExpressions(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `PutMeasures` <a name="PutMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```csharp
private void PutMeasures(IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `ResetExpressions` <a name="ResetExpressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```csharp
private void ResetExpressions()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetMeasures` <a name="ResetMeasures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```csharp
private void ResetMeasures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">Expressions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">Measures</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">MeasuresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList Expressions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `Measures`<sup>Required</sup> <a name="Measures" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList Measures { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] ExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `MeasuresInput`<sup>Optional</sup> <a name="MeasuresInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] MeasuresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets">DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets</a>

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```csharp
private DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>[]

---


### DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructionsTextInstructions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsTextInstructions">DataDatabricksGenieAgentDefinitionInstructionsTextInstructions</a>

---


### DataDatabricksGenieAgentDefinitionOutputReference <a name="DataDatabricksGenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks">PutBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions">PutInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks">ResetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBenchmarks` <a name="PutBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks"></a>

```csharp
private void PutBenchmarks(DataDatabricksGenieAgentDefinitionBenchmarks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig"></a>

```csharp
private void PutConfig(DataDatabricksGenieAgentDefinitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `PutDataSources` <a name="PutDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources"></a>

```csharp
private void PutDataSources(DataDatabricksGenieAgentDefinitionDataSources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `PutInstructions` <a name="PutInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions"></a>

```csharp
private void PutInstructions(DataDatabricksGenieAgentDefinitionInstructions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `ResetBenchmarks` <a name="ResetBenchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```csharp
private void ResetBenchmarks()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetDataSources"></a>

```csharp
private void ResetDataSources()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.resetInstructions"></a>

```csharp
private void ResetInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput">BenchmarksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Benchmarks`<sup>Required</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarks"></a>

```csharp
public DataDatabricksGenieAgentDefinitionBenchmarksOutputReference Benchmarks { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarksOutputReference">DataDatabricksGenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.config"></a>

```csharp
public DataDatabricksGenieAgentDefinitionConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfigOutputReference">DataDatabricksGenieAgentDefinitionConfigOutputReference</a>

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSources"></a>

```csharp
public DataDatabricksGenieAgentDefinitionDataSourcesOutputReference DataSources { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSourcesOutputReference">DataDatabricksGenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructions"></a>

```csharp
public DataDatabricksGenieAgentDefinitionInstructionsOutputReference Instructions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructionsOutputReference">DataDatabricksGenieAgentDefinitionInstructionsOutputReference</a>

---

##### `BenchmarksInput`<sup>Optional</sup> <a name="BenchmarksInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionBenchmarks BenchmarksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionBenchmarks">DataDatabricksGenieAgentDefinitionBenchmarks</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.configInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionConfig">DataDatabricksGenieAgentDefinitionConfig</a>

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionDataSources DataSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionDataSources">DataDatabricksGenieAgentDefinitionDataSources</a>

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentDefinitionInstructions InstructionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionInstructions">DataDatabricksGenieAgentDefinitionInstructions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksGenieAgentDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentDefinition">DataDatabricksGenieAgentDefinition</a>

---


### DataDatabricksGenieAgentProviderConfigOutputReference <a name="DataDatabricksGenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGenieAgentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksGenieAgentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksGenieAgent.DataDatabricksGenieAgentProviderConfig">DataDatabricksGenieAgentProviderConfig</a>

---




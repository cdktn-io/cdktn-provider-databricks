# `dataDatabricksLakewatchRuleConfig` Submodule <a name="`dataDatabricksLakewatchRuleConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRuleConfigA <a name="DataDatabricksLakewatchRuleConfigA" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config databricks_lakewatch_rule_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigA(Construct Scope, string Id, DataDatabricksLakewatchRuleConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig">DataDatabricksLakewatchRuleConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig">DataDatabricksLakewatchRuleConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksLakewatchRuleConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRuleConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRuleConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRuleConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRuleConfigA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchRuleConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksLakewatchRuleConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchRuleConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchRuleConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRuleConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultFolder">DefaultFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultSchedule">DefaultSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference">DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultSignalCollationWindow">DefaultSignalCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.detectionCategories">DetectionCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.effectiveDefaultFolder">EffectiveDefaultFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.effectiveDetectionCategories">EffectiveDetectionCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference">DataDatabricksLakewatchRuleConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference">DataDatabricksLakewatchRuleConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultFolder`<sup>Required</sup> <a name="DefaultFolder" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultFolder"></a>

```csharp
public string DefaultFolder { get; }
```

- *Type:* string

---

##### `DefaultSchedule`<sup>Required</sup> <a name="DefaultSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultSchedule"></a>

```csharp
public DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference DefaultSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference">DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference</a>

---

##### `DefaultSignalCollationWindow`<sup>Required</sup> <a name="DefaultSignalCollationWindow" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.defaultSignalCollationWindow"></a>

```csharp
public string DefaultSignalCollationWindow { get; }
```

- *Type:* string

---

##### `DetectionCategories`<sup>Required</sup> <a name="DetectionCategories" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.detectionCategories"></a>

```csharp
public string[] DetectionCategories { get; }
```

- *Type:* string[]

---

##### `EffectiveDefaultFolder`<sup>Required</sup> <a name="EffectiveDefaultFolder" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.effectiveDefaultFolder"></a>

```csharp
public string EffectiveDefaultFolder { get; }
```

- *Type:* string

---

##### `EffectiveDetectionCategories`<sup>Required</sup> <a name="EffectiveDetectionCategories" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.effectiveDetectionCategories"></a>

```csharp
public string[] EffectiveDetectionCategories { get; }
```

- *Type:* string[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchRuleConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference">DataDatabricksLakewatchRuleConfigProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.updatedBy"></a>

```csharp
public DataDatabricksLakewatchRuleConfigUpdatedByOutputReference UpdatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference">DataDatabricksLakewatchRuleConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRuleConfigAConfig <a name="DataDatabricksLakewatchRuleConfigAConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksLakewatchRuleConfigProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#name DataDatabricksLakewatchRuleConfigA#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#provider_config DataDatabricksLakewatchRuleConfigA#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#name DataDatabricksLakewatchRuleConfigA#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigAConfig.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchRuleConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#provider_config DataDatabricksLakewatchRuleConfigA#provider_config}.

---

### DataDatabricksLakewatchRuleConfigDefaultSchedule <a name="DataDatabricksLakewatchRuleConfigDefaultSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigDefaultSchedule {
    string AtLeastEvery = null,
    bool|IResolvable Continuous = null,
    string CronExpression = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#at_least_every DataDatabricksLakewatchRuleConfigA#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#continuous DataDatabricksLakewatchRuleConfigA#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#cron_expression DataDatabricksLakewatchRuleConfigA#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#enabled DataDatabricksLakewatchRuleConfigA#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#at_least_every DataDatabricksLakewatchRuleConfigA#at_least_every}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#continuous DataDatabricksLakewatchRuleConfigA#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#cron_expression DataDatabricksLakewatchRuleConfigA#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#enabled DataDatabricksLakewatchRuleConfigA#enabled}.

---

### DataDatabricksLakewatchRuleConfigProviderConfig <a name="DataDatabricksLakewatchRuleConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#workspace_id DataDatabricksLakewatchRuleConfigA#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#workspace_id DataDatabricksLakewatchRuleConfigA#workspace_id}.

---

### DataDatabricksLakewatchRuleConfigUpdatedBy <a name="DataDatabricksLakewatchRuleConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigUpdatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#display_name DataDatabricksLakewatchRuleConfigA#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#email DataDatabricksLakewatchRuleConfigA#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#id DataDatabricksLakewatchRuleConfigA#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#principal_type DataDatabricksLakewatchRuleConfigA#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#display_name DataDatabricksLakewatchRuleConfigA#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#email DataDatabricksLakewatchRuleConfigA#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#id DataDatabricksLakewatchRuleConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#principal_type DataDatabricksLakewatchRuleConfigA#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference <a name="DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery"></a>

```csharp
private void ResetAtLeastEvery()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule">DataDatabricksLakewatchRuleConfigDefaultSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput"></a>

```csharp
public string AtLeastEveryInput { get; }
```

- *Type:* string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput"></a>

```csharp
public bool|IResolvable ContinuousInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleConfigDefaultSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigDefaultSchedule">DataDatabricksLakewatchRuleConfigDefaultSchedule</a>

---


### DataDatabricksLakewatchRuleConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchRuleConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchRuleConfigProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigProviderConfig">DataDatabricksLakewatchRuleConfigProviderConfig</a>

---


### DataDatabricksLakewatchRuleConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchRuleConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchRuleConfigUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy">DataDatabricksLakewatchRuleConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedByOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchRuleConfigUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRuleConfig.DataDatabricksLakewatchRuleConfigUpdatedBy">DataDatabricksLakewatchRuleConfigUpdatedBy</a>

---



